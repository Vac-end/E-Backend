import { Request, Response } from 'express';
export declare const activityController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByUser: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=activity.controller.d.ts.map