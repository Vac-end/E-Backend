"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Submission = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Submission extends sequelize_1.Model {
}
exports.Submission = Submission;
Submission.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    filePath: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    status: { type: sequelize_1.DataTypes.ENUM('pendiente', 'entregado', 'calificado'), defaultValue: 'pendiente' },
    assignmentId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    studentId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Submission', timestamps: true });
//# sourceMappingURL=submission.model.js.map