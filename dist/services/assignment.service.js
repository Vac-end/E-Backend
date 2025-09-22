"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentService = void 0;
const assignment_repository_1 = require("../repositories/assignment.repository");
exports.assignmentService = {
    getAll: () => assignment_repository_1.assignmentRepository.findAll(),
    getById: (id) => assignment_repository_1.assignmentRepository.findById(id),
    create: (data) => assignment_repository_1.assignmentRepository.create(data),
    update: (id, data) => assignment_repository_1.assignmentRepository.update(id, data),
    delete: (id) => assignment_repository_1.assignmentRepository.delete(id),
    getByCourse: (courseId) => assignment_repository_1.assignmentRepository.findByCourse(courseId),
};
//# sourceMappingURL=assignment.service.js.map