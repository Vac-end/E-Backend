import { Router } from 'express';
import { assignmentController } from '../controllers/assignment.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const assignmentSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  dueDate: z.string().datetime(),
  courseId: z.number(),
});

router.get('/', authMiddleware, assignmentController.getAll);
router.get('/:id', authMiddleware, assignmentController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(assignmentSchema), assignmentController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(assignmentSchema.partial()), assignmentController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), assignmentController.delete);
router.get('/course/:courseId', authMiddleware, assignmentController.getByCourse);

export default router;