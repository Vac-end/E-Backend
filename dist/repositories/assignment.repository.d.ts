import { Assignment } from '../models/assignment.model';
export declare const assignmentRepository: {
    findAll: () => Promise<Assignment[]>;
    findById: (id: number) => Promise<Assignment | null>;
    create: (data: Partial<Assignment>) => Promise<Assignment>;
    update: (id: number, data: Partial<Assignment>) => Promise<[affectedCount: number, affectedRows: Assignment[]]>;
    delete: (id: number) => Promise<number>;
    findByCourse: (courseId: number) => Promise<Assignment[]>;
};
//# sourceMappingURL=assignment.repository.d.ts.map