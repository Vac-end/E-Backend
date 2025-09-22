"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = require("../config/env.config");
const logger_1 = require("../utils/logger");
const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided or invalid format' });
    }
    const token = authHeader.replace('Bearer ', '');
    try {
        const decoded = jsonwebtoken_1.default.verify(token, env_config_1.envConfig.JWT_SECRET);
        req.user = decoded; // Asignar al request después de extender el tipo
        next();
    }
    catch (err) {
        if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
            logger_1.logger.error('Token expired for request', { error: err.message, path: req.path });
            return res.status(401).json({ message: 'Token has expired' });
        }
        else if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            logger_1.logger.error('Invalid token for request', { error: err.message, path: req.path });
            return res.status(401).json({ message: 'Invalid token' });
        }
        else {
            logger_1.logger.error('Authentication failed for request', { error: err.message, path: req.path });
            return res.status(401).json({ message: 'Authentication failed' });
        }
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map