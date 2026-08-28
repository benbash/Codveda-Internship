import express from 'express';
import { registerUser, loginUser, forgotPassword, resetPassword, getProfile, updateProfile } from '../controllers/authController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import { validateRegister, validateLogin, validateForgotPassword, validateResetPassword, validateProfileUpdate, } from '../middleware/validateRequest.js';

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.post('/login', validateLogin, loginUser);
router.post('/forgot-password', validateForgotPassword, forgotPassword);
router.patch('/reset-password/:token', validateResetPassword, resetPassword);
router.get('/profile', authenticate, getProfile);
router.patch('/profile', authenticate, validateProfileUpdate, updateProfile);

export default router;
