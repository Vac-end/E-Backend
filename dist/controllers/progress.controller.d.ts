import { Request, Response } from 'express';
export declare const progressController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByUser: (req: Request, res: Response) => Promise<void>;
    getByLesson: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=progress.controller.d.ts.map