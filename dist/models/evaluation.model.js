"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Evaluation extends sequelize_1.Model {
}
exports.Evaluation = Evaluation;
Evaluation.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    type: { type: sequelize_1.DataTypes.ENUM('Quiz', 'Examen', 'Tarea'), allowNull: false },
    questions: { type: sequelize_1.DataTypes.TEXT, allowNull: true }, // Almacena preguntas en JSON
    lessonId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Evaluation', timestamps: true });
//# sourceMappingURL=evaluation.model.js.map