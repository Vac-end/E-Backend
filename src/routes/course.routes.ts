import { Router } from 'express';
import { courseController } from '../controllers/course.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const courseSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  createdBy: z.number(),
  gradeLevelId: z.number(),
});

router.get('/', authMiddleware, courseController.getAll);
router.get('/:id', authMiddleware, courseController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(courseSchema), courseController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(courseSchema.partial()), courseController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['administrador']), courseController.delete);
router.get('/teacher/:teacherId', authMiddleware, courseController.getByTeacher);

export default router;