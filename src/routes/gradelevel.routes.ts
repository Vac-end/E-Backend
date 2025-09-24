import { Router } from 'express';
import { GradeLevelController } from '../controllers/gradelevel.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const gradeLevelSchema = z.object({
  level: z.string().min(1),
  category: z.enum(['Inicial', 'Primaria', 'Secundaria']),
});

router.get('/', authMiddleware, GradeLevelController.findAll);
router.get('/:id', authMiddleware, GradeLevelController.findById);
router.post('/', authMiddleware, roleMiddleware(['docente', 'administrador']), validate(gradeLevelSchema), GradeLevelController.create);
router.put('/:id', authMiddleware, roleMiddleware(['administrador']), validate(gradeLevelSchema.partial()), GradeLevelController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['administrador']), GradeLevelController.delete);
router.get('/category/:category', authMiddleware, GradeLevelController.getByCategory);

export default router;