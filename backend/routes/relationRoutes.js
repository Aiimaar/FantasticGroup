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
 import auth from '../middlewares/auth.js'; 

const router = express.Router();

// User-Location
router.get('/user-locations', auth, getUserLocations);
router.post('/user-locations', auth, createUserLocation);
router.get('/users/:userId/locations', auth, getUserLocationByUserId);
router.delete('/user-locations/:id', auth, deleteUserLocation);

// Feature-Location
router.get('/feature-locations', getFeatureLocations);
router.post('/feature-locations', createFeatureLocation);
router.get('/locations/:locationId/features', getFeatureLocationByLocationId);

export default router;