import express from 'express';
import { getUser, updateUser } from '../controllers/userController.js';
import { getPublicUsers, getPublicUserById } from '../controllers/getPublicUsers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/userProfile', getUser);   // GET /api/users/me — show user data
router.put('/profile', updateUser); // PUT /api/users/me — update user data
router.get('/public', getPublicUsers);  //  Public users list
// Single public user by ID
router.get('/public/:userId', getPublicUserById);
export default router;
