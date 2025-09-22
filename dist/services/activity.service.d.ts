export declare const activityService: {
    getAll: () => Promise<import("../models").Activity[]>;
    getById: (id: number) => Promise<import("../models").Activity | null>;
    create: (data: {
        userId: number;
        action: string;
        details?: string;
    }) => Promise<import("../models").Activity>;
    delete: (id: number) => Promise<number>;
    getByUser: (userId: number) => Promise<import("../models").Activity[]>;
};
//# sourceMappingURL=activity.service.d.ts.map