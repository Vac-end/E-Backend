import { Model } from 'sequelize';
export declare class Assignment extends Model {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    courseId: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=assignment.model.d.ts.map