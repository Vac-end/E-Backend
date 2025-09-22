"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Progress extends sequelize_1.Model {
}
exports.Progress = Progress;
Progress.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    lessonId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    completed: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    score: { type: sequelize_1.DataTypes.FLOAT, allowNull: true },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Progress', timestamps: true });
//# sourceMappingURL=progress.model.js.map