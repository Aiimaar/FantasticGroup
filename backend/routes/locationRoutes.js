import express from 'express';
import {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  getLocationById
} from '../controllers/locationController.js';
 import { authenticateToken } from '../middleware/authenticateToken.js'; 

const router = express.Router();

// Public
router.get('/', getLocations);
router.get('/:id', getLocationById);  

// Protected
router.post('/', authenticateToken, createLocation);
router.put('/:id', authenticateToken, updateLocation);
router.delete('/:id', authenticateToken, deleteLocation);

export default router;