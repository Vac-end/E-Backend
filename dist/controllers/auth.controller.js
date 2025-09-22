"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("../services/auth.service");
const helpers_1 = require("../utils/helpers");
exports.authController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const { accessToken, refreshToken } = await auth_service_1.authService.login(email, password);
            res.status(200).json({ accessToken, refreshToken });
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Login');
            res.status(401).json({ message: 'Invalid credentials' });
        }
    },
    refresh: async (req, res) => {
        try {
            const { token } = req.body;
            const accessToken = await auth_service_1.authService.refresh(token);
            res.status(200).json({ accessToken });
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Refresh');
            res.status(401).json({ message: 'Invalid or expired refresh token' });
        }
    },
    logout: async (req, res) => {
        try {
            const { token } = req.body;
            await auth_service_1.authService.logout(token);
            res.status(200).json({ message: 'Logged out successfully' });
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Logout');
            res.status(500).json({ message: 'Logout failed' });
        }
    },
    recoverPassword: async (req, res) => {
        try {
            const { email } = req.body;
            await auth_service_1.authService.recoverPassword(email);
            res.status(200).json({ message: 'Recovery email sent if account exists' });
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Recover Password');
            res.status(500).json({ message: 'Failed to send recovery email' });
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { token, newPassword } = req.body;
            await auth_service_1.authService.resetPassword(token, newPassword);
            res.status(200).json({ message: 'Password reset successful' });
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Reset Password');
            res.status(400).json({ message: 'Invalid recovery token or password reset failed' });
        }
    },
};
//# sourceMappingURL=auth.controller.js.map