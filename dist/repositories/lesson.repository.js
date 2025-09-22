"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonRepository = void 0;
const lesson_model_1 = require("../models/lesson.model");
exports.lessonRepository = {
    findAll: () => lesson_model_1.Lesson.findAll({ include: ['Module', 'Evaluations', 'Progresses'] }),
    findById: (id) => lesson_model_1.Lesson.findByPk(id, { include: ['Module', 'Evaluations', 'Progresses'] }),
    create: (data) => lesson_model_1.Lesson.create(data),
    update: (id, data) => lesson_model_1.Lesson.update(data, { where: { id }, returning: true }),
    delete: (id) => lesson_model_1.Lesson.destroy({ where: { id } }),
    findByModule: (moduleId) => lesson_model_1.Lesson.findAll({ where: { moduleId } }),
};
//# sourceMappingURL=lesson.repository.js.map