import express from 'express';
import { authenticateBasic } from '../middleware/authenticateBasic.js';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', authenticateBasic, register); 
router.post('/login', authenticateBasic, login)

/* 
 router.post('/logout', ...),
 router.post('/refresh-token', ...)
 router.post('/forgot-password', ...)
 router.post('/reset-password', ...) */

export default router;