"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const group_controller_1 = require("../controllers/group.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const groupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    level: zod_1.z.string().min(1),
});
router.get('/', auth_middleware_1.authMiddleware, group_controller_1.groupController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, group_controller_1.groupController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), (0, validation_middleware_1.validate)(groupSchema), group_controller_1.groupController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), (0, validation_middleware_1.validate)(groupSchema.partial()), group_controller_1.groupController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), group_controller_1.groupController.delete);
router.get('/level/:level', auth_middleware_1.authMiddleware, group_controller_1.groupController.getByLevel);
exports.default = router;
//# sourceMappingURL=group.routes.js.map