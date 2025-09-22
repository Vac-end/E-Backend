import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Assignment extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public dueDate!: Date;
  public courseId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Assignment.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  dueDate: { type: DataTypes.DATE, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Assignment', timestamps: true });