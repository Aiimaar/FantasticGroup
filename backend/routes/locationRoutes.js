import express from 'express';
import upload, { getLocations, createLocation, updateLocation, deleteLocation, getLocationById } from '../controllers/locationController.js';
 import auth from '../middlewares/auth.js'; 

const router = express.Router();

// Public
router.get('/', getLocations);
router.get('/:id', getLocationById);  

// Protected
router.post('/', auth, upload.single('image'), createLocation);
router.put('/:id', auth, upload.single('image'), updateLocation);
router.delete('/:id', auth, deleteLocation);

export default router;