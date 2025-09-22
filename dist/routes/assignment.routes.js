"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const assignment_controller_1 = require("../controllers/assignment.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const assignmentSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    dueDate: zod_1.z.string().datetime(),
    courseId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, assignment_controller_1.assignmentController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, assignment_controller_1.assignmentController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(assignmentSchema), assignment_controller_1.assignmentController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(assignmentSchema.partial()), assignment_controller_1.assignmentController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), assignment_controller_1.assignmentController.delete);
router.get('/course/:courseId', auth_middleware_1.authMiddleware, assignment_controller_1.assignmentController.getByCourse);
exports.default = router;
//# sourceMappingURL=assignment.routes.js.map