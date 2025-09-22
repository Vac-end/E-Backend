import { Model } from 'sequelize';
export declare class Activity extends Model {
    id: number;
    userId: number;
    action: string;
    details?: string;
    createdAt: Date;
}
//# sourceMappingURL=activity.model.d.ts.map