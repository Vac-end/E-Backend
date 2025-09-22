"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const index_1 = require("./models/index");
const env_config_1 = require("./config/env.config");
const logger_1 = require("./utils/logger");
const PORT = env_config_1.envConfig.PORT || 3000;
index_1.sequelize.authenticate().then(() => {
    logger_1.logger.info('Database connected');
    app_1.default.listen(PORT, () => {
        logger_1.logger.info(`Server running on port ${PORT}`);
    });
}).catch((err) => {
    logger_1.logger.error('Database connection failed', err);
});
//# sourceMappingURL=server.js.map