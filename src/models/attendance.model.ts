import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Attendance extends Model {
  public id!: number;
  public date!: Date;
  public present!: boolean;
  public studentId!: number;
  public scheduleId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Attendance.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  date: { type: DataTypes.DATE, allowNull: false },
  present: { type: DataTypes.BOOLEAN, defaultValue: false },
  studentId: { type: DataTypes.INTEGER, allowNull: false },
  scheduleId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Attendance', timestamps: true });