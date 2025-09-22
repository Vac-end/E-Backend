import { Request, Response } from 'express';
export declare const evaluationController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByLesson: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=evaluation.controller.d.ts.map