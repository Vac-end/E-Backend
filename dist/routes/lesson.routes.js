"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lesson_controller_1 = require("../controllers/lesson.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const lessonSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    content: zod_1.z.string().min(1),
    moduleId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, lesson_controller_1.lessonController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, lesson_controller_1.lessonController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(lessonSchema), lesson_controller_1.lessonController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(lessonSchema.partial()), lesson_controller_1.lessonController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), lesson_controller_1.lessonController.delete);
router.get('/module/:moduleId', auth_middleware_1.authMiddleware, lesson_controller_1.lessonController.getByModule);
exports.default = router;
//# sourceMappingURL=lesson.routes.js.map