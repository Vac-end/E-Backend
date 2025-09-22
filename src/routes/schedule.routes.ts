import { Router } from 'express';
import { scheduleController } from '../controllers/schedule.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const scheduleSchema = z.object({
  day: z.string().min(1),
  time: z.string().min(1),
  courseId: z.number(),
});

router.get('/', authMiddleware, scheduleController.getAll);
router.get('/:id', authMiddleware, scheduleController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(scheduleSchema), scheduleController.create);
router.put('/:id', authMiddleware, roleMiddleware(['administrador']), validate(scheduleSchema.partial()), scheduleController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['administrador']), scheduleController.delete);
router.get('/course/:courseId', authMiddleware, scheduleController.getByCourse);

export default router;