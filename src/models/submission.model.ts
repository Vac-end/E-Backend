import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Submission extends Model {
  public id!: number;
  public filePath!: string; // Ruta del archivo subido (PDF, DOCX, etc.)
  public status!: 'pendiente' | 'entregado' | 'calificado';
  public assignmentId!: number;
  public studentId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Submission.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  filePath: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('pendiente', 'entregado', 'calificado'), defaultValue: 'pendiente' },
  assignmentId: { type: DataTypes.INTEGER, allowNull: false },
  studentId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Submission', timestamps: true });