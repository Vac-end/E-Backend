"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressService = void 0;
const progress_repository_1 = require("../repositories/progress.repository");
exports.progressService = {
    getAll: () => progress_repository_1.progressRepository.findAll(),
    getById: (id) => progress_repository_1.progressRepository.findById(id),
    create: (data) => progress_repository_1.progressRepository.create(data),
    update: (id, data) => progress_repository_1.progressRepository.update(id, data),
    delete: (id) => progress_repository_1.progressRepository.delete(id),
    getByUser: (userId) => progress_repository_1.progressRepository.findByUser(userId),
    getByLesson: (lessonId) => progress_repository_1.progressRepository.findByLesson(lessonId),
};
//# sourceMappingURL=progress.service.js.map