"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    role: { type: sequelize_1.DataTypes.ENUM('niño', 'docente', 'administrador'), allowNull: false },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    grade: { type: sequelize_1.DataTypes.STRING, allowNull: true },
    groupId: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'User', timestamps: true });
//# sourceMappingURL=user.model.js.map