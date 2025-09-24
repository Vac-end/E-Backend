import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';

interface CourseTeacherAttributes {
  userId: number;
  courseId: number;
  assignedAt?: Date;
}

export interface CourseTeacherCreationAttributes extends Optional<CourseTeacherAttributes, 'assignedAt'> {}

export class CourseTeacher extends Model<CourseTeacherAttributes, CourseTeacherCreationAttributes> implements CourseTeacherAttributes {
  public userId!: number;
  public courseId!: number;
  public readonly assignedAt!: Date;
}

CourseTeacher.init(
  {
    userId: { type: DataTypes.INTEGER, primaryKey: true, references: { model: 'Users', key: 'id' } },
    courseId: { type: DataTypes.INTEGER, primaryKey: true, references: { model: 'Courses', key: 'id' } },
    assignedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'CourseTeacher', timestamps: false }
);

