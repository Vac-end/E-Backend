import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Schedule extends Model {
  public id!: number;
  public day!: string; // Ej: 'Lunes'
  public time!: string; // Ej: '09:00'
  public courseId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Schedule.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  day: { type: DataTypes.STRING, allowNull: false },
  time: { type: DataTypes.STRING, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Schedule', timestamps: true });