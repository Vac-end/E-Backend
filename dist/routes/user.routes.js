"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const role_middleware_1 = require("../middlewares/role.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
// User schema
const userSchema = zod_1.z.object({
    username: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    role: zod_1.z.enum(['niño', 'docente', 'administrador']),
    name: zod_1.z.string().optional(),
    grade: zod_1.z.string().optional(),
    groupId: zod_1.z.number().optional(),
});
router.get('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), user_controller_1.userController.getAll);
router.get('/:id', auth_middleware_1.authMiddleware, user_controller_1.userController.getById);
router.post('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), (0, validation_middleware_1.validate)(userSchema), user_controller_1.userController.create);
router.put('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), (0, validation_middleware_1.validate)(userSchema.partial()), user_controller_1.userController.update);
router.delete('/:id', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), user_controller_1.userController.delete);
router.get('/role/:role', auth_middleware_1.authMiddleware, (0, role_middleware_1.roleMiddleware)(['administrador']), user_controller_1.userController.getByRole);
exports.default = router;
//# sourceMappingURL=user.routes.js.map