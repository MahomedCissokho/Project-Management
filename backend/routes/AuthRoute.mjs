import express from 'express';
import { signup, login, refreshToken } from '../controllers/AuthController.mjs';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/token', refreshToken);

export default router;
