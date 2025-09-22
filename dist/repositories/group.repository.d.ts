import { Group } from '../models/group.model';
export declare const groupRepository: {
    findAll: () => Promise<Group[]>;
    findById: (id: number) => Promise<Group | null>;
    create: (data: Partial<Group>) => Promise<Group>;
    update: (id: number, data: Partial<Group>) => Promise<[affectedCount: number, affectedRows: Group[]]>;
    delete: (id: number) => Promise<number>;
    findByLevel: (level: string) => Promise<Group[]>;
};
//# sourceMappingURL=group.repository.d.ts.map