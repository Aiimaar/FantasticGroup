import express from 'express';
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById
} from '../controllers/userController.js';
 import auth from '../middlewares/auth.js';

const router = express.Router();

// Public
router.post('/register', createUser); 

// Protected (require auth)
router.get('/', auth, getUsers);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);

export default router;