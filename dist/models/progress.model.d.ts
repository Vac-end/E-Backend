import { Model } from 'sequelize';
export declare class Progress extends Model {
    id: number;
    userId: number;
    lessonId: number;
    completed: boolean;
    score?: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=progress.model.d.ts.map