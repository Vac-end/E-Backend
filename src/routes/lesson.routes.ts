import { Router } from 'express';
import { lessonController } from '../controllers/lesson.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const lessonSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  moduleId: z.number(),
});

router.get('/', authMiddleware, lessonController.getAll);
router.get('/:id', authMiddleware, lessonController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(lessonSchema), lessonController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(lessonSchema.partial()), lessonController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), lessonController.delete);
router.get('/module/:moduleId', authMiddleware, lessonController.getByModule);

export default router;