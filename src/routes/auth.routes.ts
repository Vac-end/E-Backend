import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
const resetPasswordSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(6),
});

router.post('/login', validate(loginSchema), authController.login);
router.post('/refresh', authController.refresh);
router.post('/logout', authMiddleware, authController.logout);
router.post('/recover-password', validate(z.object({ email: z.string().email() })), authController.recoverPassword);
router.post('/reset-password', validate(resetPasswordSchema), authController.resetPassword);

export default router;