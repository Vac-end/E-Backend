import { Progress } from '../models/progress.model';
export declare const progressRepository: {
    findAll: () => Promise<Progress[]>;
    findById: (id: number) => Promise<Progress | null>;
    create: (data: Partial<Progress>) => Promise<Progress>;
    update: (id: number, data: Partial<Progress>) => Promise<[affectedCount: number, affectedRows: Progress[]]>;
    delete: (id: number) => Promise<number>;
    findByUser: (userId: number) => Promise<Progress[]>;
    findByLesson: (lessonId: number) => Promise<Progress[]>;
};
//# sourceMappingURL=progress.repository.d.ts.map