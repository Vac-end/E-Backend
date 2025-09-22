"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluation_controller_1 = require("../controllers/evaluation.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const evaluationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    type: zod_1.z.enum(['Quiz', 'Examen', 'Tarea']),
    lessonId: zod_1.z.number(),
    questions: zod_1.z.string().optional(),
});
router.get('/', auth_middleware_1.authMiddleware, evaluation_controller_1.evaluationController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, evaluation_controller_1.evaluationController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(evaluationSchema), evaluation_controller_1.evaluationController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(evaluationSchema.partial()), evaluation_controller_1.evaluationController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), evaluation_controller_1.evaluationController.delete);
router.get('/lesson/:lessonId', auth_middleware_1.authMiddleware, evaluation_controller_1.evaluationController.getByLesson);
exports.default = router;
//# sourceMappingURL=evaluation.routes.js.map