"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = require("../config/db.config");
class RefreshToken extends sequelize_1.Model {
}
exports.RefreshToken = RefreshToken;
RefreshToken.init({
    id: { type: sequelize_1.DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    token: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
    userId: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    expires: { type: sequelize_1.DataTypes.DATE, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
}, { sequelize: db_config_1.sequelize, modelName: 'RefreshToken', timestamps: false });
//# sourceMappingURL=refreshtoken.model.js.map