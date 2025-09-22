"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const logger_1 = require("../utils/logger");
const validate = (schema) => (req, res, next) => {
    try {
        const validatedData = schema.parse(req.body);
        req.body = validatedData; // Update request body with validated data
        next();
    }
    catch (err) {
        logger_1.logger.error('Validation error', err);
        return res.status(400).json({ message: 'Validation error', errors: err.errors });
    }
};
exports.validate = validate;
//# sourceMappingURL=validation.middleware.js.map