import { Request, Response } from 'express';
export declare const lessonController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByModule: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=lesson.controller.d.ts.map