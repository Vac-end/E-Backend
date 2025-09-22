"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activity_controller_1 = require("../controllers/activity.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const activitySchema = zod_1.z.object({
    userId: zod_1.z.number(),
    action: zod_1.z.string().min(1),
    details: zod_1.z.string().optional(),
});
router.get('/', auth_middleware_1.authMiddleware, activity_controller_1.activityController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, activity_controller_1.activityController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, validation_middleware_1.validate)(activitySchema), activity_controller_1.activityController.create);
router.delete('/:id', auth_middleware_1.authMiddleware, activity_controller_1.activityController.delete);
router.get('/user/:userId', auth_middleware_1.authMiddleware, activity_controller_1.activityController.getByUser);
exports.default = router;
//# sourceMappingURL=activity.routes.js.map