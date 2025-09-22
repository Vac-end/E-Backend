export declare const lessonService: {
    getAll: () => Promise<import("../models").Lesson[]>;
    getById: (id: number) => Promise<import("../models").Lesson | null>;
    create: (data: {
        title: string;
        content: string;
        moduleId: number;
    }) => Promise<import("../models").Lesson>;
    update: (id: number, data: Partial<{
        title: string;
        content: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Lesson[]]>;
    delete: (id: number) => Promise<number>;
    getByModule: (moduleId: number) => Promise<import("../models").Lesson[]>;
};
//# sourceMappingURL=lesson.service.d.ts.map