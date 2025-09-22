import { Model } from 'sequelize';
export declare class Submission extends Model {
    id: number;
    filePath: string;
    status: 'pendiente' | 'entregado' | 'calificado';
    assignmentId: number;
    studentId: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=submission.model.d.ts.map