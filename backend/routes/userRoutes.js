import express from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById
} from '../controllers/userController.js';
 import { authenticateToken } from '../middleware/authenticateToken.js';

const router = express.Router();

// Public
router.post('/register', createUser); 

// Protected (require auth)
router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id',authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;