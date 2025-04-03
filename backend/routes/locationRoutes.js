import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js'; 
import upload, { getLocations, createLocation, updateLocation, deleteLocation, getLocationById } from '../controllers/locationController.js';


const router = express.Router();

// Public
router.get('/', getLocations);
router.get('/:id', getLocationById);  

// Protected
router.post('/', authenticateToken, upload.single('image'), createLocation);
router.put('/:id', authenticateToken, upload.single('image'), updateLocation);
router.delete('/:id', authenticateToken, deleteLocation);

export default router;