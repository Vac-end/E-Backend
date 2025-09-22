export declare const gradeService: {
    getAll: () => Promise<import("../models").Grade[]>;
    getById: (id: number) => Promise<import("../models").Grade | null>;
    create: (data: {
        score: number;
        comments?: string;
        submissionId: number;
        teacherId: number;
    }) => Promise<import("../models").Grade>;
    update: (id: number, data: Partial<{
        score: number;
        comments?: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Grade[]]>;
    delete: (id: number) => Promise<number>;
    getBySubmission: (submissionId: number) => Promise<import("../models").Grade | null>;
    getByTeacher: (teacherId: number) => Promise<import("../models").Grade[]>;
};
//# sourceMappingURL=grade.service.d.ts.map