import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoute from './routes/AuthRoute.mjs'
import Permission from './models/Permission.mjs'


dotenv.configDotenv()
const app = express()

const { PORT, MONGODB_URL } = process.env

/**
 * Connexion au serveur de base de données
 */
const setupRolesAndPermissions = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to MongoDB');

        // Check if the admin role already exists
        const existingAdminRole = await Role.findOne({ name: 'admin' });
        if (existingAdminRole) {
            console.log('Admin role already exists. Skipping creation.');
            return;
        }

        // Define permissions
        const permissions = [
            { name: 'view_projects', description: 'View projects' },
            { name: 'edit_projects', description: 'Edit projects' },
            { name: 'delete_projects', description: 'Delete projects' },
            { name: 'view_tasks', description: 'View tasks' },
            { name: 'edit_tasks', description: 'Edit tasks' },
            { name: 'delete_tasks', description: 'Delete tasks' },
            { name: 'validate_expenses', description: 'Validate expenses' },
            { name: 'view_documents', description: 'View documents' },
            { name: 'upload_documents', description: 'Upload documents' },
            { name: 'request_certificate', description: 'Request certificate' },
        ];

        // Save permissions to the database
        const savedPermissions = await Permission.insertMany(permissions);
        console.log('Permissions created:', savedPermissions);

        // Create an admin role and associate permissions
        const adminRole = new Role({
            name: 'admin',
            permissions: savedPermissions.map(permission => permission._id)
        });

        await adminRole.save();
        console.log('Admin role created with permissions:', adminRole);
    } catch (error) {
        console.error('Error setting up roles and permissions:', error);
    }
}

setupRolesAndPermissions()
/**
 *  Configuration du serveur express
 */

app.listen(PORT, () => {
    console.log("Le serveur backend s'execute sur le port "+ PORT)
})

app.use(cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'],
    credentials: true
}));


app.use(express.json())
app.use(cookieParser)

app.use('/', authRoute)

