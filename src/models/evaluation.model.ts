import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.config';

export class Evaluation extends Model {
  public id!: number;
  public title!: string;
  public type!: 'Quiz' | 'Examen' | 'Tarea'; // De HUs de evaluaciones
  public questions?: string; // JSON de preguntas
  public lessonId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Evaluation.init({
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM('Quiz', 'Examen', 'Tarea'), allowNull: false },
  questions: { type: DataTypes.TEXT, allowNull: true }, // Almacena preguntas en JSON
  lessonId: { type: DataTypes.INTEGER, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { sequelize, modelName: 'Evaluation', timestamps: true });