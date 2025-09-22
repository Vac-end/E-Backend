export declare const courseService: {
    getAll: () => Promise<import("../models").Course[]>;
    getById: (id: number) => Promise<import("../models").Course | null>;
    create: (data: {
        title: string;
        description: string;
        createdBy: number;
    }) => Promise<import("../models").Course>;
    update: (id: number, data: Partial<{
        title: string;
        description: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Course[]]>;
    delete: (id: number) => Promise<number>;
    getByTeacher: (teacherId: number) => Promise<import("../models").Course[]>;
};
//# sourceMappingURL=course.service.d.ts.map