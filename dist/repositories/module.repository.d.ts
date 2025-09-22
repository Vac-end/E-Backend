import { Module } from '../models/module.model';
export declare const moduleRepository: {
    findAll: () => Promise<Module[]>;
    findById: (id: number) => Promise<Module | null>;
    create: (data: Partial<Module>) => Promise<Module>;
    update: (id: number, data: Partial<Module>) => Promise<[affectedCount: number, affectedRows: Module[]]>;
    delete: (id: number) => Promise<number>;
    findByCourse: (courseId: number) => Promise<Module[]>;
};
//# sourceMappingURL=module.repository.d.ts.map