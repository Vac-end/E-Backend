import { Model } from 'sequelize';
export declare class Attendance extends Model {
    id: number;
    date: Date;
    present: boolean;
    studentId: number;
    scheduleId: number;
    createdAt: Date;
    updatedAt: Date;
}
//# sourceMappingURL=attendance.model.d.ts.map