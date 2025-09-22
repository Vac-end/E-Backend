"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Assignment extends sequelize_1.Model {
}
exports.Assignment = Assignment;
Assignment.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    description: { type: sequelize_1.DataTypes.TEXT, allowNull: false },
    dueDate: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    courseId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Assignment', timestamps: true });
//# sourceMappingURL=assignment.model.js.map