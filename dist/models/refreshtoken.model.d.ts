import { Model } from 'sequelize';
export declare class RefreshToken extends Model {
    id: number;
    token: string;
    userId: number;
    expires: Date;
    createdAt: Date;
}
//# sourceMappingURL=refreshtoken.model.d.ts.map