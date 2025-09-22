import { Submission } from '../models/submission.model';
export declare const submissionRepository: {
    findAll: () => Promise<Submission[]>;
    findById: (id: number) => Promise<Submission | null>;
    create: (data: Partial<Submission>) => Promise<Submission>;
    update: (id: number, data: Partial<Submission>) => Promise<[affectedCount: number, affectedRows: Submission[]]>;
    delete: (id: number) => Promise<number>;
    findByAssignment: (assignmentId: number) => Promise<Submission[]>;
    findByStudent: (studentId: number) => Promise<Submission[]>;
};
//# sourceMappingURL=submmission.repository.d.ts.map