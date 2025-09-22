import { Router } from 'express';
import { progressController } from '../controllers/progress.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const progressSchema = z.object({
  userId: z.number(),
  lessonId: z.number(),
  completed: z.boolean(),
  score: z.number().optional(),
});

router.get('/', authMiddleware, progressController.getAll);
router.get('/:id', authMiddleware, progressController.getById);
router.post('/', authMiddleware, validate(progressSchema), progressController.create);
router.put('/:id', authMiddleware, validate(progressSchema.partial()), progressController.update);
router.delete('/:id', authMiddleware, progressController.delete);
router.get('/user/:userId', authMiddleware, progressController.getByUser);
router.get('/lesson/:lessonId', authMiddleware, progressController.getByLesson);

export default router;