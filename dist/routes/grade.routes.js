"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grade_controller_1 = require("../controllers/grade.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const gradeSchema = zod_1.z.object({
    score: zod_1.z.number().min(0).max(100),
    comments: zod_1.z.string().optional(),
    submissionId: zod_1.z.number(),
    teacherId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, grade_controller_1.gradeController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, grade_controller_1.gradeController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(gradeSchema), grade_controller_1.gradeController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(gradeSchema.partial()), grade_controller_1.gradeController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), grade_controller_1.gradeController.delete);
router.get('/submission/:submissionId', auth_middleware_1.authMiddleware, grade_controller_1.gradeController.getBySubmission);
router.get('/teacher/:teacherId', auth_middleware_1.authMiddleware, grade_controller_1.gradeController.getByTeacher);
exports.default = router;
//# sourceMappingURL=grade.routes.js.map