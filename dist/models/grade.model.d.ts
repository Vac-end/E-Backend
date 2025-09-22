import { Model } from 'sequelize';
export declare class Grade extends Model {
    id: number;
    score: number;
    comments?: string;
    submissionId: number;
    teacherId: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=grade.model.d.ts.map