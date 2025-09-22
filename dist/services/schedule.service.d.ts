export declare const scheduleService: {
    getAll: () => Promise<import("../models").Schedule[]>;
    getById: (id: number) => Promise<import("../models").Schedule | null>;
    create: (data: {
        day: string;
        time: string;
        courseId: number;
    }) => Promise<import("../models").Schedule>;
    update: (id: number, data: Partial<{
        day: string;
        time: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Schedule[]]>;
    delete: (id: number) => Promise<number>;
    getByCourse: (courseId: number) => Promise<import("../models").Schedule[]>;
};
//# sourceMappingURL=schedule.service.d.ts.map