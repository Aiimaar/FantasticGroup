import express from 'express';
import {
  getUserLocations,
  createUserLocation,
  getUserLocationByUserId,
  deleteUserLocation
} from '../controllers/userLocationController.js';
import {
  getFeatureLocations,
  createFeatureLocation,
  getFeatureLocationByLocationId
} from '../controllers/featureLocationController.js';
 import { authenticateToken } from '../middleware/authenticateToken.js'; 

const router = express.Router();

// User-Location
router.get('/user-locations', authenticateToken, getUserLocations);
router.post('/user-locations', authenticateToken, createUserLocation);
router.get('/users/:userId/locations', authenticateToken, getUserLocationByUserId);
router.delete('/user-locations/:id', authenticateToken, deleteUserLocation);

// Feature-Location
router.get('/feature-locations', getFeatureLocations);
router.post('/feature-locations', createFeatureLocation);
router.get('/locations/:locationId/features', getFeatureLocationByLocationId);

export default router;