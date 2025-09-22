export declare const assignmentService: {
    getAll: () => Promise<import("../models").Assignment[]>;
    getById: (id: number) => Promise<import("../models").Assignment | null>;
    create: (data: {
        title: string;
        description: string;
        dueDate: Date;
        courseId: number;
    }) => Promise<import("../models").Assignment>;
    update: (id: number, data: Partial<{
        title: string;
        description: string;
        dueDate: Date;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Assignment[]]>;
    delete: (id: number) => Promise<number>;
    getByCourse: (courseId: number) => Promise<import("../models").Assignment[]>;
};
//# sourceMappingURL=assignment.service.d.ts.map