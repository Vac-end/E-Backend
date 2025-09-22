import { Model, Optional } from 'sequelize';
interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'niño' | 'docente' | 'administrador';
    name?: string;
    grade?: string;
    groupId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
    role: 'niño' | 'docente' | 'administrador';
    name?: string;
    grade?: string;
    groupId?: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export {};
//# sourceMappingURL=user.model.d.ts.map