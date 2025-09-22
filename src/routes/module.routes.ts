import { Router } from 'express';
import { moduleController } from '../controllers/module.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const moduleSchema = z.object({
  title: z.string().min(1),
  courseId: z.number(),
});

router.get('/', authMiddleware, moduleController.getAll);
router.get('/:id', authMiddleware, moduleController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(moduleSchema), moduleController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(moduleSchema.partial()), moduleController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), moduleController.delete);
router.get('/course/:courseId', authMiddleware, moduleController.getByCourse);

export default router;