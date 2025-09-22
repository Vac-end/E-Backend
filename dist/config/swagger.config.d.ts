declare const _default: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    paths: {
        '/auth/login': {
            post: {
                summary: string;
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: string;
                                properties: {
                                    email: {
                                        type: string;
                                    };
                                    password: {
                                        type: string;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    '200': {
                        description: string;
                    };
                };
            };
        };
    };
    components: {
        securitySchemes: {
            bearerAuth: {
                type: string;
                scheme: string;
                bearerFormat: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=swagger.config.d.ts.map