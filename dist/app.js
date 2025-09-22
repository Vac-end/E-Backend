"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const env_config_1 = require("./config/env.config");
const logger_1 = require("./utils/logger");
const routes_1 = __importDefault(require("./routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
const notFound_middleware_1 = require("./middlewares/notFound.middleware");
// Crear instancia de la aplicación
const app = (0, express_1.default)();
// Middlewares globales
app.use((0, helmet_1.default)()); // Seguridad HTTP (e.g., encabezados de seguridad)
app.use((0, cors_1.default)({ origin: env_config_1.envConfig.CORS_ORIGIN, credentials: true })); // Habilitar CORS
app.use(express_1.default.json()); // Parsear JSON en las solicitudes
app.use(express_1.default.urlencoded({ extended: true })); // Parsear datos de formularios
app.use((0, morgan_1.default)('combined', { stream: { write: (message) => logger_1.logger.info(message.trim()) } })); // Logging de solicitudes
// Saludar (health check)
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});
// Montar rutas
app.use('/api', routes_1.default);
// Middleware de manejo de errores 404
app.use(notFound_middleware_1.notFoundHandler);
// Middleware de manejo de errores global
app.use(error_middleware_1.errorHandler);
// Iniciar servidor
const PORT = env_config_1.envConfig.PORT; // Usar directamente el valor parseado de envConfig
app.listen(PORT, () => {
    logger_1.logger.info(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map