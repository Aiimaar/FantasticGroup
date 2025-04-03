import express from 'express';
import userRoutes from './userRoutes.js';
import locationRoutes from './locationRoutes.js';
import featureRoutes from './featureRoutes.js';
import relationRoutes from './relationRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/locations', locationRoutes);
router.use('/features', featureRoutes);
router.use('/relations', relationRoutes);

export default router;