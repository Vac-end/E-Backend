"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.envConfig = {
    PORT: parseInt(process.env.PORT || '3000', 10), // Parsear como número
    DATABASE_URL: process.env.DATABASE_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || 'your-jwt-secret',
    REFRESH_SECRET: process.env.REFRESH_SECRET || 'your-refresh-secret',
    EMAIL_USER: process.env.EMAIL_USER || '',
    EMAIL_PASS: process.env.EMAIL_PASS || '',
    FRONTEND_URL: process.env.FRONTEND_URL || '',
    CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000', // Añadir CORS_ORIGIN
};
//# sourceMappingURL=env.config.js.map