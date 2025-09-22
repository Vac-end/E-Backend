import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class RefreshToken extends Model {
  public id!: number;
  public token!: string;
  public userId!: number;
  public expires!: Date;
  public createdAt!: Date;
}

RefreshToken.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  token: { type: DataTypes.STRING, allowNull: false, unique: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  expires: { type: DataTypes.DATE, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'RefreshToken', timestamps: false });