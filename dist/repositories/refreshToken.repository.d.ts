import { RefreshToken } from '../models/refreshtoken.model';
export declare const refreshTokenRepository: {
    findAll: () => Promise<RefreshToken[]>;
    findById: (id: number) => Promise<RefreshToken | null>;
    findByToken: (token: string) => Promise<RefreshToken | null>;
    create: (data: Partial<RefreshToken>) => Promise<RefreshToken>;
    delete: (id: number) => Promise<number>;
    deleteByToken: (token: string) => Promise<number>;
    findByUser: (userId: number) => Promise<RefreshToken[]>;
};
//# sourceMappingURL=refreshToken.repository.d.ts.map