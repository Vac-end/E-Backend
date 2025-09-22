"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Schedule extends sequelize_1.Model {
}
exports.Schedule = Schedule;
Schedule.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    day: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    time: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    courseId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Schedule', timestamps: true });
//# sourceMappingURL=schedule.model.js.map