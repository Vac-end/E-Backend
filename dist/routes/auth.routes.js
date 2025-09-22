"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const zod_1 = require("zod");
const router = (0, express_1.Router)();
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
const resetPasswordSchema = zod_1.z.object({
    token: zod_1.z.string(),
    newPassword: zod_1.z.string().min(6),
});
router.post('/login', (0, validation_middleware_1.validate)(loginSchema), auth_controller_1.authController.login);
router.post('/refresh', auth_controller_1.authController.refresh);
router.post('/logout', auth_middleware_1.authMiddleware, auth_controller_1.authController.logout);
router.post('/recover-password', (0, validation_middleware_1.validate)(zod_1.z.object({ email: zod_1.z.string().email() })), auth_controller_1.authController.recoverPassword);
router.post('/reset-password', (0, validation_middleware_1.validate)(resetPasswordSchema), auth_controller_1.authController.resetPassword);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map