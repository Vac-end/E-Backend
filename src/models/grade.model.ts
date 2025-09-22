import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Grade extends Model {
  public id!: number;
  public score!: number;
  public comments?: string;
  public submissionId!: number;
  public teacherId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Grade.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  score: { type: DataTypes.FLOAT, allowNull: false },
  comments: { type: DataTypes.TEXT, allowNull: true },
  submissionId: { type: DataTypes.INTEGER, allowNull: false },
  teacherId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Grade', timestamps: true });