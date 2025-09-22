import { Request, Response } from 'express';
export declare const submissionController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByAssignment: (req: Request, res: Response) => Promise<void>;
    getByStudent: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=submission.controller.d.ts.map