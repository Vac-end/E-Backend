"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonService = void 0;
const lesson_repository_1 = require("../repositories/lesson.repository");
exports.lessonService = {
    getAll: () => lesson_repository_1.lessonRepository.findAll(),
    getById: (id) => lesson_repository_1.lessonRepository.findById(id),
    create: (data) => lesson_repository_1.lessonRepository.create(data),
    update: (id, data) => lesson_repository_1.lessonRepository.update(id, data),
    delete: (id) => lesson_repository_1.lessonRepository.delete(id),
    getByModule: (moduleId) => lesson_repository_1.lessonRepository.findByModule(moduleId),
};
//# sourceMappingURL=lesson.service.js.map