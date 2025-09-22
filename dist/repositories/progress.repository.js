"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressRepository = void 0;
const progress_model_1 = require("../models/progress.model");
exports.progressRepository = {
    findAll: () => progress_model_1.Progress.findAll({ include: ['User', 'Lesson'] }),
    findById: (id) => progress_model_1.Progress.findByPk(id, { include: ['User', 'Lesson'] }),
    create: (data) => progress_model_1.Progress.create(data),
    update: (id, data) => progress_model_1.Progress.update(data, { where: { id }, returning: true }),
    delete: (id) => progress_model_1.Progress.destroy({ where: { id } }),
    findByUser: (userId) => progress_model_1.Progress.findAll({ where: { userId } }),
    findByLesson: (lessonId) => progress_model_1.Progress.findAll({ where: { lessonId } }),
};
//# sourceMappingURL=progress.repository.js.map