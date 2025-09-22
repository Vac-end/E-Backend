import { Grade } from '../models/grade.model';
export declare const gradeRepository: {
    findAll: () => Promise<Grade[]>;
    findById: (id: number) => Promise<Grade | null>;
    create: (data: Partial<Grade>) => Promise<Grade>;
    update: (id: number, data: Partial<Grade>) => Promise<[affectedCount: number, affectedRows: Grade[]]>;
    delete: (id: number) => Promise<number>;
    findBySubmission: (submissionId: number) => Promise<Grade | null>;
    findByTeacher: (teacherId: number) => Promise<Grade[]>;
};
//# sourceMappingURL=grade.repository.d.ts.map