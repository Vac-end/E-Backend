"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfMiddleware = void 0;
const csurf_1 = __importDefault(require("csurf"));
const logger_1 = require("../utils/logger");
// Initialize CSRF protection with cookie-based token
const csrfProtection = (0, csurf_1.default)({ cookie: true });
const csrfMiddleware = (req, res, next) => {
    csrfProtection(req, res, (err) => {
        if (err) {
            logger_1.logger.error('CSRF validation failed', err);
            return res.status(403).json({ message: 'Invalid CSRF token' });
        }
        res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false, secure: process.env.NODE_ENV === 'production' });
        next();
    });
};
exports.csrfMiddleware = csrfMiddleware;
//# sourceMappingURL=csrf.middleware.js.map