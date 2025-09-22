"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeRepository = void 0;
const grade_model_1 = require("../models/grade.model");
exports.gradeRepository = {
    findAll: () => grade_model_1.Grade.findAll({ include: ['Submission', 'Teacher'] }),
    findById: (id) => grade_model_1.Grade.findByPk(id, { include: ['Submission', 'Teacher'] }),
    create: (data) => grade_model_1.Grade.create(data),
    update: (id, data) => grade_model_1.Grade.update(data, { where: { id }, returning: true }),
    delete: (id) => grade_model_1.Grade.destroy({ where: { id } }),
    findBySubmission: (submissionId) => grade_model_1.Grade.findOne({ where: { submissionId } }),
    findByTeacher: (teacherId) => grade_model_1.Grade.findAll({ where: { teacherId } }),
};
//# sourceMappingURL=grade.repository.js.map