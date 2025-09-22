import { Router } from 'express';
import { groupController } from '../controllers/group.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const groupSchema = z.object({
  name: z.string().min(1),
  level: z.string().min(1),
});

router.get('/', authMiddleware, groupController.getAll);
router.get('/:id', authMiddleware, groupController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente','administrador']), validate(groupSchema), groupController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente','administrador']), validate(groupSchema.partial()), groupController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['docente','administrador']), groupController.delete);
router.get('/level/:level', authMiddleware, groupController.getByLevel);

export default router;