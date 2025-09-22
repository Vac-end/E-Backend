"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const module_controller_1 = require("../controllers/module.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const moduleSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    courseId: zod_1.z.number(),
});
router.get('/', auth_middleware_1.authMiddleware, module_controller_1.moduleController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, module_controller_1.moduleController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(moduleSchema), module_controller_1.moduleController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), (0, validation_middleware_1.validate)(moduleSchema.partial()), module_controller_1.moduleController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['docente']), module_controller_1.moduleController.delete);
router.get('/course/:courseId', auth_middleware_1.authMiddleware, module_controller_1.moduleController.getByCourse);
exports.default = router;
//# sourceMappingURL=module.routes.js.map