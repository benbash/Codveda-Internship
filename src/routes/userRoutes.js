import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getProfile, updateProfile } from '../controllers/userController.js';
import { validateProfileUpdate } from '../middleware/validateRequest.js';

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.patch('/profile', authenticate, validateProfileUpdate, updateProfile);

export default router;
