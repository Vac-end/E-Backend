"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const refreshToken_repository_1 = require("../repositories/refreshToken.repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = require("../config/env.config");
const email_service_1 = require("./email.service");
const uuid_1 = require("uuid");
exports.authService = {
    login: async (email, password) => {
        const user = await user_repository_1.userRepository.findByEmail(email);
        if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        const accessToken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, env_config_1.envConfig.JWT_SECRET, { expiresIn: '15m' });
        const refreshToken = jsonwebtoken_1.default.sign({ id: user.id }, env_config_1.envConfig.REFRESH_SECRET, { expiresIn: '7d' });
        await refreshToken_repository_1.refreshTokenRepository.create({ token: refreshToken, userId: user.id, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
        return { accessToken, refreshToken };
    },
    refresh: async (token) => {
        const refreshToken = await refreshToken_repository_1.refreshTokenRepository.findByToken(token);
        if (!refreshToken || refreshToken.expires < new Date()) {
            throw new Error('Invalid or expired refresh token');
        }
        const decoded = jsonwebtoken_1.default.verify(token, env_config_1.envConfig.REFRESH_SECRET);
        const user = await user_repository_1.userRepository.findById(decoded.id);
        if (!user)
            throw new Error('User not found');
        return jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, env_config_1.envConfig.JWT_SECRET, { expiresIn: '15m' });
    },
    logout: async (token) => {
        await refreshToken_repository_1.refreshTokenRepository.deleteByToken(token);
    },
    recoverPassword: async (email) => {
        const user = await user_repository_1.userRepository.findByEmail(email);
        if (!user)
            return; // Do not leak email existence
        const recoveryToken = (0, uuid_1.v4)();
        await email_service_1.emailService.send(email, 'Password Recovery', `Use this token to reset your password: ${recoveryToken}`);
        // In a real implementation, store recoveryToken with expiry in a table (e.g., PasswordReset)
    },
    resetPassword: async (token, newPassword) => {
        // Placeholder: Validate token from a hypothetical PasswordReset table
        const user = await user_repository_1.userRepository.findByEmail('example@example.com'); // Replace with token-based lookup
        if (!user)
            throw new Error('Invalid recovery token');
        const hashedPassword = await bcrypt_1.default.hash(newPassword, 10);
        await user_repository_1.userRepository.update(user.id, { password: hashedPassword });
    },
};
//# sourceMappingURL=auth.service.js.map