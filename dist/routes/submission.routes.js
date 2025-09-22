"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const submission_controller_1 = require("../controllers/submission.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const submissionSchema = zod_1.z.object({
    filePath: zod_1.z.string(),
    status: zod_1.z.enum(['pendiente', 'entregado', 'calificado']),
    assignmentId: zod_1.z.number(),
    studentId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, submission_controller_1.submissionController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, submission_controller_1.submissionController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(submissionSchema), submission_controller_1.submissionController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(submissionSchema.partial()), submission_controller_1.submissionController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, submission_controller_1.submissionController.delete);
router.get('/assignment/:assignmentId', auth_middleware_1.authMiddleware, submission_controller_1.submissionController.getByAssignment);
router.get('/student/:studentId', auth_middleware_1.authMiddleware, submission_controller_1.submissionController.getByStudent);
exports.default = router;
//# sourceMappingURL=submission.routes.js.map