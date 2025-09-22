import { Activity } from '../models/activity.model';
export declare const activityRepository: {
    findAll: () => Promise<Activity[]>;
    findById: (id: number) => Promise<Activity | null>;
    create: (data: Partial<Activity>) => Promise<Activity>;
    delete: (id: number) => Promise<number>;
    findByUser: (userId: number) => Promise<Activity[]>;
};
//# sourceMappingURL=activity.repository.d.ts.map