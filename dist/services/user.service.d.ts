export declare const userService: {
    getAll: () => Promise<import("../models").User[]>;
    getById: (id: number) => Promise<import("../models").User | null>;
    create: (data: {
        username: string;
        email: string;
        password: string;
        role: "ni\u00F1o" | "docente" | "administrador";
        name?: string;
        grade?: string;
        groupId?: number;
    }) => Promise<import("../models").User>;
    update: (id: number, data: Partial<{
        username: string;
        email: string;
        name?: string;
        grade?: string;
        groupId?: number;
        password?: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").User[]]>;
    delete: (id: number) => Promise<number>;
    getByRole: (role: "ni\u00F1o" | "docente" | "administrador") => Promise<import("../models").User[]>;
};
//# sourceMappingURL=user.service.d.ts.map