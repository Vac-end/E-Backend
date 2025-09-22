"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attendance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Attendance extends sequelize_1.Model {
}
exports.Attendance = Attendance;
Attendance.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    date: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    present: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    studentId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    scheduleId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Attendance', timestamps: true });
//# sourceMappingURL=attendance.model.js.map