"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationService = void 0;
const evaluation_repository_1 = require("../repositories/evaluation.repository");
exports.evaluationService = {
    getAll: () => evaluation_repository_1.evaluationRepository.findAll(),
    getById: (id) => evaluation_repository_1.evaluationRepository.findById(id),
    create: (data) => evaluation_repository_1.evaluationRepository.create(data),
    update: (id, data) => evaluation_repository_1.evaluationRepository.update(id, data),
    delete: (id) => evaluation_repository_1.evaluationRepository.delete(id),
    getByLesson: (lessonId) => evaluation_repository_1.evaluationRepository.findByLesson(lessonId),
};
//# sourceMappingURL=evaluation.service.js.map