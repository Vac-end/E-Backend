"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleService = void 0;
const module_repository_1 = require("../repositories/module.repository");
exports.moduleService = {
    getAll: () => module_repository_1.moduleRepository.findAll(),
    getById: (id) => module_repository_1.moduleRepository.findById(id),
    create: (data) => module_repository_1.moduleRepository.create(data),
    update: (id, data) => module_repository_1.moduleRepository.update(id, data),
    delete: (id) => module_repository_1.moduleRepository.delete(id),
    getByCourse: (courseId) => module_repository_1.moduleRepository.findByCourse(courseId),
};
//# sourceMappingURL=module.service.js.map