import { Evaluation } from '../models/evaluation.model';
export declare const evaluationRepository: {
    findAll: () => Promise<Evaluation[]>;
    findById: (id: number) => Promise<Evaluation | null>;
    create: (data: Partial<Evaluation>) => Promise<Evaluation>;
    update: (id: number, data: Partial<Evaluation>) => Promise<[affectedCount: number, affectedRows: Evaluation[]]>;
    delete: (id: number) => Promise<number>;
    findByLesson: (lessonId: number) => Promise<Evaluation[]>;
};
//# sourceMappingURL=evaluation.repository.d.ts.map