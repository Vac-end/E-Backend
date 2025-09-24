import { Router } from 'express';
import { courseTeacherController } from '../controllers/courseteacher.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const courseTeacherSchema = z.object({
  userId: z.number(),
  courseId: z.number(),
});

router.get('/', authMiddleware, courseTeacherController.getAll);
router.get('/:userId/:courseId', authMiddleware, courseTeacherController.getById);
router.post('/', authMiddleware, roleMiddleware(['administrador']), validate(courseTeacherSchema), courseTeacherController.create);
router.put('/:userId/:courseId', authMiddleware, roleMiddleware(['administrador']), validate(courseTeacherSchema.partial()), courseTeacherController.update);
router.delete('/:userId/:courseId', authMiddleware, roleMiddleware(['administrador']), courseTeacherController.delete);

export default router;