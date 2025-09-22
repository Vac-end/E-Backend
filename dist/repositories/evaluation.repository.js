"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationRepository = void 0;
const evaluation_model_1 = require("../models/evaluation.model");
exports.evaluationRepository = {
    findAll: () => evaluation_model_1.Evaluation.findAll({ include: ['Lesson'] }),
    findById: (id) => evaluation_model_1.Evaluation.findByPk(id, { include: ['Lesson'] }),
    create: (data) => evaluation_model_1.Evaluation.create(data),
    update: (id, data) => evaluation_model_1.Evaluation.update(data, { where: { id }, returning: true }),
    delete: (id) => evaluation_model_1.Evaluation.destroy({ where: { id } }),
    findByLesson: (lessonId) => evaluation_model_1.Evaluation.findAll({ where: { lessonId } }),
};
//# sourceMappingURL=evaluation.repository.js.map