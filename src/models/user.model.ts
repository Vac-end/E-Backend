import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'niño' | 'docente' | 'administrador';
  name?: string;
  grade?: string;
  groupId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role!: 'niño' | 'docente' | 'administrador';
  public name?: string;
  public grade?: string;
  public groupId?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM('niño', 'docente', 'administrador'), allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true },
    grade: { type: DataTypes.STRING, allowNull: true },
    groupId: { type: DataTypes.INTEGER, allowNull: true },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'User', timestamps: true }
);