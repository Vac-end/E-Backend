"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const logger_1 = require("../utils/logger");
const errorHandler = (err, req, res, next) => {
    var _a;
    // Determinar el estado HTTP
    const status = err.status || 500;
    // Loggear el error con contexto detallado
    logger_1.logger.error('Unhandled error occurred', {
        error: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method,
        status,
        timestamp: new Date().toISOString(),
        userId: ((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) || 'anonymous',
        // Opcional: agregar IP del cliente para más contexto
        ip: req.ip,
    });
    // Enviar respuesta al cliente
    res.status(status).json({
        message: status === 500 ? 'An unexpected error occurred' : err.message,
        error: process.env.NODE_ENV === 'development' ? err.message : undefined,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
    // Omitir next() después de enviar la respuesta para evitar problemas
    // next(); // Comentar o eliminar esta línea
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map