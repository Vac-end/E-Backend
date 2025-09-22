export declare const progressService: {
    getAll: () => Promise<import("../models").Progress[]>;
    getById: (id: number) => Promise<import("../models").Progress | null>;
    create: (data: {
        userId: number;
        lessonId: number;
        completed: boolean;
        score?: number;
    }) => Promise<import("../models").Progress>;
    update: (id: number, data: Partial<{
        completed: boolean;
        score?: number;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Progress[]]>;
    delete: (id: number) => Promise<number>;
    getByUser: (userId: number) => Promise<import("../models").Progress[]>;
    getByLesson: (lessonId: number) => Promise<import("../models").Progress[]>;
};
//# sourceMappingURL=progress.service.d.ts.map