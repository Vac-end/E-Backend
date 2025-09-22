import { Request, Response } from 'express';
export declare const authController: {
    login: (req: Request, res: Response) => Promise<void>;
    refresh: (req: Request, res: Response) => Promise<void>;
    logout: (req: Request, res: Response) => Promise<void>;
    recoverPassword: (req: Request, res: Response) => Promise<void>;
    resetPassword: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map