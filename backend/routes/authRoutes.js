import express from 'express';
import jwt from 'jsonwebtoken';
import { authenticateBasic } from '../middleware/authenticateBasic.js';

const router = express.Router();

router.post('/login', authenticateBasic, (req, res) => {
  const token = jwt.sign(
    { id: req.user.id, email: req.user.email },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: {
      id: req.user.id,
      user_name: req.user.user_name,
      email: req.user.email
    }
  });
});

/* 
 router.post('/logout', ...),
 router.post('/refresh-token', ...)
 router.post('/forgot-password', ...)
 router.post('/reset-password', ...) */

export default router;