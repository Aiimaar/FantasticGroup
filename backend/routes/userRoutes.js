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

router.get('/', authenticateToken, getUsers);
router.get('/:id', authenticateToken, getUserById);
router.put('/:id',authenticateToken, updateUser);
router.delete('/:id', authenticateToken, deleteUser);

export default router;