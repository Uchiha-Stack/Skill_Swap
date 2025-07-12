import express from 'express';
import { rateUser } from '../controllers/ratingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rate or update rating for a user
router.post('/:userId', protect, rateUser);

export default router;
