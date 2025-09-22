export declare const moduleService: {
    getAll: () => Promise<import("../models").Module[]>;
    getById: (id: number) => Promise<import("../models").Module | null>;
    create: (data: {
        title: string;
        courseId: number;
    }) => Promise<import("../models").Module>;
    update: (id: number, data: Partial<{
        title: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Module[]]>;
    delete: (id: number) => Promise<number>;
    getByCourse: (courseId: number) => Promise<import("../models").Module[]>;
};
//# sourceMappingURL=module.service.d.ts.map