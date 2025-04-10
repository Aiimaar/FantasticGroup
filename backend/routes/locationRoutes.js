import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js'; 
import upload, { getLocations, createLocation, updateLocation, deleteLocation, getLocationById } from '../controllers/locationController.js';

const router = express.Router();

// Public
router.get('/', getLocations);
router.get('/:id', getLocationById);  

// Protected (upload.array pour plusieurs images, max 10 par exemple)
router.post('/', authenticateToken, upload.array('images', 10), createLocation);
router.put('/:id', authenticateToken, upload.array('images', 10), updateLocation);
router.delete('/:id', authenticateToken, deleteLocation);

export default router;