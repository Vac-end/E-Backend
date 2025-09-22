"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleRepository = void 0;
const module_model_1 = require("../models/module.model");
exports.moduleRepository = {
    findAll: () => module_model_1.Module.findAll({ include: ['Course', 'Lessons'] }),
    findById: (id) => module_model_1.Module.findByPk(id, { include: ['Course', 'Lessons'] }),
    create: (data) => module_model_1.Module.create(data),
    update: (id, data) => module_model_1.Module.update(data, { where: { id }, returning: true }),
    delete: (id) => module_model_1.Module.destroy({ where: { id } }),
    findByCourse: (courseId) => module_model_1.Module.findAll({ where: { courseId } }),
};
//# sourceMappingURL=module.repository.js.map