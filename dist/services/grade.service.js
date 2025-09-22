"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeService = void 0;
const grade_repository_1 = require("../repositories/grade.repository");
exports.gradeService = {
    getAll: () => grade_repository_1.gradeRepository.findAll(),
    getById: (id) => grade_repository_1.gradeRepository.findById(id),
    create: (data) => grade_repository_1.gradeRepository.create(data),
    update: (id, data) => grade_repository_1.gradeRepository.update(id, data),
    delete: (id) => grade_repository_1.gradeRepository.delete(id),
    getBySubmission: (submissionId) => grade_repository_1.gradeRepository.findBySubmission(submissionId),
    getByTeacher: (teacherId) => grade_repository_1.gradeRepository.findByTeacher(teacherId),
};
//# sourceMappingURL=grade.service.js.map