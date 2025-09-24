import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/db.config';

interface GradeLevelAttributes {
  id: number;
  level: string;
  category: 'Inicial' | 'Primaria' | 'Secundaria';
  createdAt?: Date;
  updatedAt?: Date;
}

interface GradeLevelCreationAttributes extends Optional<GradeLevelAttributes, 'id' | 'createdAt' | 'updatedAt'> { }

export class GradeLevel extends Model<GradeLevelAttributes, GradeLevelCreationAttributes> implements GradeLevelAttributes {
  public id!: number;
  public level!: string;
  public category!: 'Inicial' | 'Primaria' | 'Secundaria';
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

GradeLevel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM( 'Inicial', 'Primaria', 'Secundaria' ),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'GradeLevel',
    timestamps: true,
  }
);