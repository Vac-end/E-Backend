import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Module extends Model {
  public id!: number;
  public title!: string;
  public courseId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Module.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Module', timestamps: true });