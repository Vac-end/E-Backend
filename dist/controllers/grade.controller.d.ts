import { Request, Response } from 'express';
export declare const gradeController: {
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    delete: (req: Request, res: Response) => Promise<void>;
    getBySubmission: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getByTeacher: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=grade.controller.d.ts.map