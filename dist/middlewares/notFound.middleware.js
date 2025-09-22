"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: 'Route not found', path: req.originalUrl });
};
exports.notFoundHandler = notFoundHandler;
//# sourceMappingURL=notFound.middleware.js.map