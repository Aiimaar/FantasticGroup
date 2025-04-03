import express from 'express';
import {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  getLocationById
} from '../controllers/locationController.js';
 import auth from '../middlewares/auth.js'; 

const router = express.Router();

// Public
router.get('/', getLocations);
router.get('/:id', getLocationById);

// Protected
router.post('/', auth, createLocation);
router.put('/:id', auth, updateLocation);
router.delete('/:id', auth, deleteLocation);

export default router;