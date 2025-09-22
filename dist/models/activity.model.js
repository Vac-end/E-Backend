"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Activity extends sequelize_1.Model {
}
exports.Activity = Activity;
Activity.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    action: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    details: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Activity', timestamps: false }); // No necesita updatedAt
//# sourceMappingURL=activity.model.js.map