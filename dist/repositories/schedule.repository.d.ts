import { Schedule } from '../models/schedule.model';
export declare const scheduleRepository: {
    findAll: () => Promise<Schedule[]>;
    findById: (id: number) => Promise<Schedule | null>;
    create: (data: Partial<Schedule>) => Promise<Schedule>;
    update: (id: number, data: Partial<Schedule>) => Promise<[affectedCount: number, affectedRows: Schedule[]]>;
    delete: (id: number) => Promise<number>;
    findByCourse: (courseId: number) => Promise<Schedule[]>;
};
//# sourceMappingURL=schedule.repository.d.ts.map