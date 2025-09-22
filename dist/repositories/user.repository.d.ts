import { User, UserCreationAttributes } from '../models/user.model';
export declare const userRepository: {
    findAll: () => Promise<User[]>;
    findById: (id: number) => Promise<User | null>;
    findByEmail: (email: string) => Promise<User | null>;
    findByUsername: (username: string) => Promise<User | null>;
    create: (data: UserCreationAttributes) => Promise<User>;
    update: (id: number, data: Partial<UserCreationAttributes>) => Promise<[affectedCount: number, affectedRows: User[]]>;
    delete: (id: number) => Promise<number>;
    findByRole: (role: "ni\u00F1o" | "docente" | "administrador") => Promise<User[]>;
};
//# sourceMappingURL=user.repository.d.ts.map