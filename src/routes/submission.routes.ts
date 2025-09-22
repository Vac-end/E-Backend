import { Router } from 'express';
import { submissionController } from '../controllers/submission.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validation.middleware';
import { z } from 'zod';

const router = Router();

const submissionSchema = z.object({
  filePath: z.string(),
  status: z.enum(['pendiente', 'entregado', 'calificado']),
  assignmentId: z.number(),
  studentId: z.number(),
});

router.get('/', authMiddleware, submissionController.getAll);
router.get('/:id', authMiddleware, submissionController.getById);
router.post('/', authMiddleware, validate(submissionSchema), submissionController.create);
router.put('/:id', authMiddleware, validate(submissionSchema.partial()), submissionController.update);
router.delete('/:id', authMiddleware, submissionController.delete);
router.get('/assignment/:assignmentId', authMiddleware, submissionController.getByAssignment);
router.get('/student/:studentId', authMiddleware, submissionController.getByStudent);

export default router;