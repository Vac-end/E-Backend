import { Request, Response } from 'express';
export declare const moduleController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getByCourse: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=module.controller.d.ts.map