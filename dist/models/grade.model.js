"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grade = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Grade extends sequelize_1.Model {
}
exports.Grade = Grade;
Grade.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    score: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    comments: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    submissionId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    teacherId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Grade', timestamps: true });
//# sourceMappingURL=grade.model.js.map