import { Lesson } from '../models/lesson.model';
export declare const lessonRepository: {
    findAll: () => Promise<Lesson[]>;
    findById: (id: number) => Promise<Lesson | null>;
    create: (data: Partial<Lesson>) => Promise<Lesson>;
    update: (id: number, data: Partial<Lesson>) => Promise<[affectedCount: number, affectedRows: Lesson[]]>;
    delete: (id: number) => Promise<number>;
    findByModule: (moduleId: number) => Promise<Lesson[]>;
};
//# sourceMappingURL=lesson.repository.d.ts.map