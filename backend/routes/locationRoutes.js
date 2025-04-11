import express from 'express';
import { authenticateToken } from '../middleware/authenticateToken.js'; 
import upload, { getLocations, createLocation, updateLocation, deleteLocation, getLocationById, getFilteredLocations } from '../controllers/locationController.js';

const router = express.Router();

console.log('getFilteredLocations imported:', getFilteredLocations); // Log pour débogage

// Public
router.get('/', getLocations);
router.get('/filtered', getFilteredLocations); // Déplacé avant /:id
router.get('/:id', getLocationById);  
console.log('Mounted /filtered route for GET requests'); // Log pour débogage

// Protected (upload.array pour plusieurs images, max 10 par exemple)
router.post('/', authenticateToken, upload.array('images', 10), createLocation);
router.put('/:id', authenticateToken, upload.array('images', 10), updateLocation);
router.delete('/:id', authenticateToken, deleteLocation);

export default router;