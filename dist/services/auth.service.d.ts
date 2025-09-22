export declare const authService: {
    login: (email: string, password: string) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh: (token: string) => Promise<string>;
    logout: (token: string) => Promise<void>;
    recoverPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, newPassword: string) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map