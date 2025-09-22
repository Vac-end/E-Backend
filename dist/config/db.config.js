"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const env_config_1 = require("./env.config");
exports.sequelize = new sequelize_1.Sequelize(env_config_1.envConfig.DATABASE_URL, {
    dialect: 'mysql',
    logging: false,
});
//# sourceMappingURL=db.config.js.map