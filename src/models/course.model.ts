import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';

interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  createdBy: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourseCreationAttributes extends Optional<CourseAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public createdBy!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Course.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'Course', timestamps: true }
);