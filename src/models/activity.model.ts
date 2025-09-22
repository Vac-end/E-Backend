import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Activity extends Model {
  public id!: number;
  public userId!: number;
  public action!: string; 
  public details?: string;
  public createdAt!: Date;
}

Activity.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  action: { type: DataTypes.STRING, allowNull: false },
  details: { type: DataTypes.TEXT, allowNull: true },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Activity', timestamps: false });