import express from 'express';
import { getUser, updateUser } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/userProfile', protect, getUser);   // GET /api/users/me — show user data
router.put('/profile', protect, updateUser); // PUT /api/users/me — update user data

export default router;
