import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Progress extends Model {
  public id!: number;
  public userId!: number;
  public lessonId!: number;
  public completed!: boolean;
  public score?: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Progress.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  lessonId: { type: DataTypes.INTEGER, allowNull: false },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  score: { type: DataTypes.FLOAT, allowNull: true },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Progress', timestamps: true });