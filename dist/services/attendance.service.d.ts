export declare const attendanceService: {
    getAll: () => Promise<import("../models").Attendance[]>;
    getById: (id: number) => Promise<import("../models").Attendance | null>;
    create: (data: {
        date: Date;
        present: boolean;
        studentId: number;
        scheduleId: number;
    }) => Promise<import("../models").Attendance>;
    update: (id: number, data: Partial<{
        present: boolean;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Attendance[]]>;
    delete: (id: number) => Promise<number>;
    getByStudent: (studentId: number) => Promise<import("../models").Attendance[]>;
    getBySchedule: (scheduleId: number) => Promise<import("../models").Attendance[]>;
};
//# sourceMappingURL=attendance.service.d.ts.map