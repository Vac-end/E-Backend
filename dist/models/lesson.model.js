"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Lesson extends sequelize_1.Model {
}
exports.Lesson = Lesson;
Lesson.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    content: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    moduleId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Lesson', timestamps: true });
//# sourceMappingURL=lesson.model.js.map