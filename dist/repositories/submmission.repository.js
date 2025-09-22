"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionRepository = void 0;
const submission_model_1 = require("../models/submission.model");
exports.submissionRepository = {
    findAll: () => submission_model_1.Submission.findAll({ include: ['Assignment', 'Student', 'Grade'] }),
    findById: (id) => submission_model_1.Submission.findByPk(id, { include: ['Assignment', 'Student', 'Grade'] }),
    create: (data) => submission_model_1.Submission.create(data),
    update: (id, data) => submission_model_1.Submission.update(data, { where: { id }, returning: true }),
    delete: (id) => submission_model_1.Submission.destroy({ where: { id } }),
    findByAssignment: (assignmentId) => submission_model_1.Submission.findAll({ where: { assignmentId } }),
    findByStudent: (studentId) => submission_model_1.Submission.findAll({ where: { studentId } }),
};
//# sourceMappingURL=submmission.repository.js.map