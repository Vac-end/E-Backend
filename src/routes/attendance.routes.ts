import { Router } from 'express';
import { attendanceController } from '../controllers/attendance.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const attendanceSchema = z.object({
  date: z.string().datetime(),
  present: z.boolean(),
  studentId: z.number(),
  scheduleId: z.number(),
});

router.get('/', authMiddleware, attendanceController.getAll);
router.get('/:id', authMiddleware, attendanceController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(attendanceSchema), attendanceController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(attendanceSchema.partial()), attendanceController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), attendanceController.delete);
router.get('/student/:studentId', authMiddleware, attendanceController.getByStudent);
router.get('/schedule/:scheduleId', authMiddleware, attendanceController.getBySchedule);

export default router;