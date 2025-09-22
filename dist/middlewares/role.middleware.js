"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleMiddleware = void 0;
const roleMiddleware = (allowedRoles) => (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }
    next();
};
exports.roleMiddleware = roleMiddleware;
//# sourceMappingURL=role.middleware.js.map