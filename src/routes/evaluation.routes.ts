import { Router } from 'express';
import { evaluationController } from '../controllers/evaluation.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const evaluationSchema = z.object({
  title: z.string().min(1),
  type: z.enum(['Quiz', 'Examen', 'Tarea']),
  lessonId: z.number(),
  questions: z.string().optional(),
});

router.get('/', authMiddleware, evaluationController.getAll);
router.get('/:id', authMiddleware, evaluationController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(evaluationSchema), evaluationController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(evaluationSchema.partial()), evaluationController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), evaluationController.delete);
router.get('/lesson/:lessonId', authMiddleware, evaluationController.getByLesson);

export default router;