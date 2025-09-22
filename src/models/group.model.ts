import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Group extends Model {
  public id!: number;
  public name!: string;
  public level!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Group.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Group', timestamps: true });