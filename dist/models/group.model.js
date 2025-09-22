"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class Group extends sequelize_1.Model {
}
exports.Group = Group;
Group.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    level: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'Group', timestamps: true });
//# sourceMappingURL=group.model.js.map