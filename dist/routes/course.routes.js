"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_controller_1 = require("../controllers/course.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const courseSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    createdBy: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, course_controller_1.courseController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, course_controller_1.courseController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(courseSchema), course_controller_1.courseController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(courseSchema.partial()), course_controller_1.courseController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), course_controller_1.courseController.delete);
router.get('/teacher/:teacherId', auth_middleware_1.authMiddleware, course_controller_1.courseController.getByTeacher);
exports.default = router;
//# sourceMappingURL=course.routes.js.map