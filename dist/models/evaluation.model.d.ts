import { Model } from 'sequelize';
export declare class Evaluation extends Model {
    id: number;
    title: string;
    type: 'Quiz' | 'Examen' | 'Tarea';
    questions?: string;
    lessonId: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=evaluation.model.d.ts.map