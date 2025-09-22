export declare const groupService: {
    getAll: () => Promise<import("../models").Group[]>;
    getById: (id: number) => Promise<import("../models").Group | null>;
    create: (data: {
        name: string;
        level: string;
    }) => Promise<import("../models").Group>;
    update: (id: number, data: Partial<{
        name: string;
        level: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Group[]]>;
    delete: (id: number) => Promise<number>;
    getByLevel: (level: string) => Promise<import("../models").Group[]>;
};
//# sourceMappingURL=group.service.d.ts.map