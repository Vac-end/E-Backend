export declare const submissionService: {
    getAll: () => Promise<import("../models").Submission[]>;
    getById: (id: number) => Promise<import("../models").Submission | null>;
    create: (data: {
        filePath: string;
        status: "pendiente" | "entregado" | "calificado";
        assignmentId: number;
        studentId: number;
    }) => Promise<import("../models").Submission>;
    update: (id: number, data: Partial<{
        status: "pendiente" | "entregado" | "calificado";
        filePath?: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Submission[]]>;
    delete: (id: number) => Promise<number>;
    getByAssignment: (assignmentId: number) => Promise<import("../models").Submission[]>;
    getByStudent: (studentId: number) => Promise<import("../models").Submission[]>;
};
//# sourceMappingURL=submission.service.d.ts.map