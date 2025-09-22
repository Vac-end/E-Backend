"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeFilePath = exports.sanitize = void 0;
const jsdom_1 = require("jsdom");
const dompurify_1 = __importDefault(require("dompurify"));
const window = new jsdom_1.JSDOM('').window;
const purify = (0, dompurify_1.default)(window);
const sanitize = (input) => {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    return purify.sanitize(input, {
        USE_PROFILES: { html: true },
        ADD_TAGS: ['iframe'], // Allow iframes for embedded content (e.g., videos)
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'], // Safe iframe attributes
    });
};
exports.sanitize = sanitize;
const sanitizeFilePath = (input) => {
    // Basic sanitization for file paths to prevent directory traversal
    const sanitized = input.replace(/[<>:"\/\\|?*]/g, '');
    return sanitized.trim();
};
exports.sanitizeFilePath = sanitizeFilePath;
//# sourceMappingURL=sanitizer.js.map