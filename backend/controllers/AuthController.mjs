import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Membre from '../models/Membre.mjs';
import Role from '../models/Role.mjs';
import dotenv from 'dotenv';
import { sendEmail } from '../utils/emailService.mjs';

dotenv.config();

const generateAccessToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ email: user.email, id: user._id }, process.env.REFRESH_SECRET_KEY, { expiresIn: '7d' });
};

const signup = async (req, res) => {
    const { email, nom, prenom, numero, titre, motDePasse } = req.body;

    try {
        const existingMembre = await Membre.findOne({ email });
        if (existingMembre) return res.status(400).json({ message: 'Membre already exists' });

        const hashedPassword = await bcrypt.hash(motDePasse, 12);

        let role = await Role.findOne({ name: 'admin' });
        if (!role) {
            return res.status(400).json({ message: 'Admin role does not exist' });
        }

        const newMembre = new Membre({
            email,
            nom,
            prenom,
            numero,
            titre,
            motDePasse: hashedPassword,
            roles: [role._id]
        });

        await newMembre.save();

        const token = generateAccessToken(newMembre);
        const refreshToken = generateRefreshToken(newMembre);
        const magicLink = `http://localhost:3000/change-password?token=${token}`;

        await sendEmail(email, 'Set your password', `Please click the following link to set your password: ${magicLink}`);

        res.status(201).json({ result: newMembre, token, refreshToken });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const login = async (req, res) => {
    const { email, motDePasse } = req.body;

    try {
        const existingMembre = await Membre.findOne({ email }).populate('roles');
        if (!existingMembre) return res.status(404).json({ message: 'Membre not found' });

        const isPasswordCorrect = await bcrypt.compare(motDePasse, existingMembre.motDePasse);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateAccessToken(existingMembre);
        const refreshToken = generateRefreshToken(existingMembre);

        res.status(200).json({ result: existingMembre, token, refreshToken });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const refreshToken = (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, process.env.REFRESH_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        const newToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    });
};

export { signup, login, refreshToken };