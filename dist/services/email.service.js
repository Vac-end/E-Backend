"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const env_config_1 = require("../config/env.config");
const logger_1 = require("../utils/logger");
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: env_config_1.envConfig.EMAIL_USER,
        pass: env_config_1.envConfig.EMAIL_PASS,
    },
});
exports.emailService = {
    send: async (to, subject, text) => {
        try {
            await transporter.sendMail({
                from: env_config_1.envConfig.EMAIL_USER,
                to,
                subject,
                text,
            });
            logger_1.logger.info(`Email sent to ${to}`);
        }
        catch (err) {
            logger_1.logger.error('Failed to send email', err);
            throw new Error('Email sending failed');
        }
    },
};
//# sourceMappingURL=email.service.js.map