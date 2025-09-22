import { Attendance } from '../models/attendance.model';
export declare const attendanceRepository: {
    findAll: () => Promise<Attendance[]>;
    findById: (id: number) => Promise<Attendance | null>;
    create: (data: Partial<Attendance>) => Promise<Attendance>;
    update: (id: number, data: Partial<Attendance>) => Promise<[affectedCount: number, affectedRows: Attendance[]]>;
    delete: (id: number) => Promise<number>;
    findByStudent: (studentId: number) => Promise<Attendance[]>;
    findBySchedule: (scheduleId: number) => Promise<Attendance[]>;
};
//# sourceMappingURL=attendance.repository.d.ts.map