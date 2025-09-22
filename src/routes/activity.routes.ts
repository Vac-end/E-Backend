import { Router } from 'express';
import { activityController } from '../controllers/activity.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const activitySchema = z.object({
  userId: z.number(),
  action: z.string().min(1),
  details: z.string().optional(),
});

router.get('/', authMiddleware, activityController.getAll);
router.get('/:id', authMiddleware, activityController.getById);
router.post('/', authMiddleware, validate(activitySchema), activityController.create);
router.delete('/:id', authMiddleware, activityController.delete);
router.get('/user/:userId', authMiddleware, activityController.getByUser);

export default router;