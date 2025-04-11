import express from 'express';
import { getReviews, getReviewById, getReviewsByLocationId, getReviewsByUserId, createReview, updateReview, deleteReview } from '../controllers/reviewController.js';
import { authenticateToken } from '../middleware/authenticateToken.js'; 

const router = express.Router();

router.get('/', getReviews);
router.get('/:id', getReviewById);
router.get('/loc/:locationId', getReviewsByLocationId);
router.get('/usr/:userId', getReviewsByUserId);
router.post('/', authenticateToken, createReview);
router.put('/:id', authenticateToken, updateReview);
router.delete('/:id', authenticateToken, deleteReview);

export default router;