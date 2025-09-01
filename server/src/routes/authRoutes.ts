import { Router } from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile); // Protected route

export default router;
