import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';
import { Course } from './course.model';
import { User } from './user.model';

interface GroupAttributes {
  id: number;
  courseId: number; // Vincula el grupo a un curso específico
  name: string;
  size: number; // Número actual de miembros, no máximo (máximo viene de Course)
  createdBy: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GroupCreationAttributes extends Optional<GroupAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Group extends Model<GroupAttributes, GroupCreationAttributes> implements GroupAttributes {
  public id!: number;
  public courseId!: number;
  public name!: string;
  public size!: number;
  public createdBy!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly Members!: User[];
  public readonly Course!: Course;
  public readonly Creator!: User;
}

Group.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    courseId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Courses', key: 'id' } },
    name: { type: DataTypes.STRING, allowNull: false },
    size: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, validate: { min: 0 } }, // Contador de miembros
    createdBy: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'Group', timestamps: true }
);

