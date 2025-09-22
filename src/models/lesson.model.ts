import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Lesson extends Model {
  public id!: number;
  public title!: string;
  public content!: string; // Recursos digitales: videos, lecturas, etc.
  public moduleId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Lesson.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  moduleId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Lesson', timestamps: true });