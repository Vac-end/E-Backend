"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const progress_controller_1 = require("../controllers/progress.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const progressSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    lessonId: zod_1.z.number(),
    completed: zod_1.z.boolean(),
    score: zod_1.z.number().optional(),
});
router.get('/', auth_middleware_1.authMiddleware, progress_controller_1.progressController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, progress_controller_1.progressController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(progressSchema), progress_controller_1.progressController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(progressSchema.partial()), progress_controller_1.progressController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, progress_controller_1.progressController.delete);
router.get('/user/:userId', auth_middleware_1.authMiddleware, progress_controller_1.progressController.getByUser);
router.get('/lesson/:lessonId', auth_middleware_1.authMiddleware, progress_controller_1.progressController.getByLesson);
exports.default = router;
//# sourceMappingURL=progress.routes.js.map