"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendance_controller_1 = require("../controllers/attendance.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const attendanceSchema = zod_1.z.object({
    date: zod_1.z.string().datetime(),
    present: zod_1.z.boolean(),
    studentId: zod_1.z.number(),
    scheduleId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, attendance_controller_1.attendanceController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, attendance_controller_1.attendanceController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(attendanceSchema), attendance_controller_1.attendanceController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(attendanceSchema.partial()), attendance_controller_1.attendanceController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), attendance_controller_1.attendanceController.delete);
router.get('/student/:studentId', auth_middleware_1.authMiddleware, attendance_controller_1.attendanceController.getByStudent);
router.get('/schedule/:scheduleId', auth_middleware_1.authMiddleware, attendance_controller_1.attendanceController.getBySchedule);
exports.default = router;
//# sourceMappingURL=attendance.routes.js.map