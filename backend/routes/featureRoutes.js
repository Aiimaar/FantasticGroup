import express from 'express';
import {
  getFeatures,
  createFeature,
  updateFeature,
  deleteFeature,
  getFeatureById
} from '../controllers/featureController.js';
import { authenticateToken } from '../middleware/authenticateToken.js'; 

const router = express.Router();

router.get('/', getFeatures);
router.get('/:id', getFeatureById);
router.post('/', authenticateToken, createFeature);
router.put('/:id', authenticateToken, updateFeature);
router.delete('/:id', authenticateToken, deleteFeature);

export default router;