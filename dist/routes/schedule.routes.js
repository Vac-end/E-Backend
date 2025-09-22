"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schedule_controller_1 = require("../controllers/schedule.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const scheduleSchema = zod_1.z.object({
    day: zod_1.z.string().min(1),
    time: zod_1.z.string().min(1),
    courseId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, schedule_controller_1.scheduleController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, schedule_controller_1.scheduleController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(scheduleSchema), schedule_controller_1.scheduleController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(scheduleSchema.partial()), schedule_controller_1.scheduleController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), schedule_controller_1.scheduleController.delete);
router.get('/course/:courseId', auth_middleware_1.authMiddleware, schedule_controller_1.scheduleController.getByCourse);
exports.default = router;
//# sourceMappingURL=schedule.routes.js.map