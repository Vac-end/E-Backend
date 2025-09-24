import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';
import { User } from './user.model';

interface CourseAttributes {
  id: number;
  title: string;
  description: string;
  createdBy: number;
  gradeLevelId: number;
  isGroupEnabled?: boolean;
  maxGroupSize?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CourseCreationAttributes extends Optional<CourseAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public createdBy!: number;
  public gradeLevelId!: number;
  public isGroupEnabled?: boolean;
  public maxGroupSize?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly Creator!: User;
  public readonly Teachers!: User[];
}

Course.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    createdBy: { type: DataTypes.INTEGER, allowNull: false },
    gradeLevelId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'GradeLevels', key: 'id' } },
    isGroupEnabled: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
    maxGroupSize: { type: DataTypes.INTEGER, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'Course', timestamps: true }
);