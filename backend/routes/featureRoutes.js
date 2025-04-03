import express from 'express';
import {
  getFeatures,
  createFeature,
  updateFeature,
  deleteFeature,
  getFeatureById
} from '../controllers/featureController.js';
import auth from '../middlewares/auth.js'; 

const router = express.Router();

router.get('/', getFeatures);
router.get('/:id', getFeatureById);
router.post('/', auth, createFeature);
router.put('/:id', auth, updateFeature);
router.delete('/:id', auth, deleteFeature);

export default router;