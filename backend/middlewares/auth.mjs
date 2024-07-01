import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) return res.status(401).json({ message: 'No token provided' });

        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

export default auth;
