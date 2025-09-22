import { Model, Optional } from 'sequelize';
interface CourseAttributes {
    id: number;
    title: string;
    description: string;
    createdBy: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CourseCreationAttributes extends Optional<CourseAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
export declare class Course extends Model<CourseAttributes, CourseCreationAttributes> implements CourseAttributes {
    id: number;
    title: string;
    description: string;
    createdBy: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export {};
//# sourceMappingURL=course.model.d.ts.map