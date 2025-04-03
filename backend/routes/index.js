import express from 'express';
import userRoutes from './userRoutes.js';
import locationRoutes from './locationRoutes.js';
import featureRoutes from './featureRoutes.js';
import relationRoutes from './relationRoutes.js';
import reviewRoutes from './reviewRoutes.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/features', featureRoutes);
router.use('/relations', relationRoutes);
router.use('/reviews', reviewRoutes);
router.use('/auth', authRoutes);

export default router;