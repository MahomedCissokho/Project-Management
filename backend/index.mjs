import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
// import authRoute from './routes/AuthRoute.mjs';

dotenv.config(); // Corrected

const app = express();
const { PORT, MONGODB_URL } = process.env;

/**
 * Connexion au serveur de base de données
 */
mongoose.connect(MONGODB_URL)
  .then(() => console.log("Connexion au serveur de base de données réussie"))
  .catch((err) => console.error("Erreur lors de la connexion au serveur de base de données: " + err));

/**
 *  Configuration du serveur express
 */
app.use(cors({
  origin: `http://localhost:${PORT}`,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE'],
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// app.use('/', authRoute);

app.listen(PORT, () => {
  console.log("Le serveur backend s'exécute sur le port " + PORT);
});
