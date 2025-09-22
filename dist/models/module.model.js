"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Module extends sequelize_1.Model {
}
exports.Module = Module;
Module.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    courseId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Module', timestamps: true });
//# sourceMappingURL=module.model.js.map