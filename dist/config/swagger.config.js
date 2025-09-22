"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    openapi: '3.0.0',
    info: {
        title: 'E-Learning API',
        version: '1.0.0',
        description: 'API for e-learning platform',
    },
    paths: {
        '/auth/login': {
            post: {
                summary: 'Login user',
                requestBody: { content: { 'application/json': { schema: { type: 'object', properties: { email: { type: 'string' }, password: { type: 'string' } } } } } },
                responses: { '200': { description: 'Success' } }
            }
        },
        // Agregar todos los endpoints similares para cada ruta...
    },
    components: {
        securitySchemes: {
            bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        },
    },
};
//# sourceMappingURL=swagger.config.js.map