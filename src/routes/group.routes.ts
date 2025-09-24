import { Router } from 'express';
import { groupController } from '../controllers/group.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { roleMiddleware } from '../middlewares/role.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const createGroupSchema = z.object({
  courseId: z.number(),
  name: z.string().min(1),
});

const memberSchema = z.object({
  groupId: z.number(),
  userId: z.number(),
});

router.get('/', authMiddleware, groupController.getAll);
router.get('/:id', authMiddleware, groupController.getById);
router.post('/', authMiddleware, roleMiddleware(['docente', 'administrador']), validate(createGroupSchema), groupController.create);
router.put('/:id', authMiddleware, roleMiddleware(['docente', 'administrador']), validate(createGroupSchema.partial()), groupController.update);
router.delete('/:id', authMiddleware, roleMiddleware(['administrador']), groupController.delete);
router.get('/course/:courseId', authMiddleware, groupController.getByCourse);
router.post('/add-member', authMiddleware, roleMiddleware(['docente', 'administrador']), validate(memberSchema), groupController.addMember);
router.post('/remove-member', authMiddleware, roleMiddleware(['docente', 'administrador']), validate(memberSchema), groupController.removeMember);

export default router;