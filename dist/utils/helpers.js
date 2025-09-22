"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleServiceError = exports.calculateProgressPercentage = exports.isValidEmail = exports.formatDate = exports.generateRandomId = void 0;
const logger_1 = require("./logger");
const generateRandomId = () => {
    // Generate a simple random ID (for testing or temporary use)
    return Math.random().toString(36).substr(2, 9);
};
exports.generateRandomId = generateRandomId;
const formatDate = (date) => {
    var _a;
    return (_a = date.toISOString().split('T')[0]) !== null && _a !== void 0 ? _a : ''; // Returns YYYY-MM-DD
};
exports.formatDate = formatDate;
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
exports.isValidEmail = isValidEmail;
const calculateProgressPercentage = (completedLessons, totalLessons) => {
    if (totalLessons === 0)
        return 0;
    return Math.round((completedLessons / totalLessons) * 100);
};
exports.calculateProgressPercentage = calculateProgressPercentage;
// Error handling helper
const handleServiceError = (error, context) => {
    logger_1.logger.error(`${context} failed`, { error: error instanceof Error ? error.message : String(error) });
    throw new Error(`Service error in ${context}: ${error instanceof Error ? error.message : 'Unknown error'}`);
};
exports.handleServiceError = handleServiceError;
//# sourceMappingURL=helpers.js.map