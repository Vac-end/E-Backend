import { Router } from 'express';
import { gradeController } from '../controllers/grade.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const gradeSchema = z.object({
  score: z.number().min(0).max(100),
  comments: z.string().optional(),
  submissionId: z.number(),
  teacherId: z.number(),
});

router.get('/', authMiddleware, gradeController.getAll);
router.get('/:id', authMiddleware, gradeController.getById);
router.post('/', authMiddleware, roleMiddleware(['administrador']), validate(gradeSchema), gradeController.create);
router.put('/:id', authMiddleware, roleMiddleware(['administrador']), validate(gradeSchema.partial()), gradeController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['administrador']), gradeController.delete);
router.get('/submission/:submissionId', authMiddleware, gradeController.getBySubmission);
router.get('/teacher/:teacherId', authMiddleware, gradeController.getByTeacher);

export default router;