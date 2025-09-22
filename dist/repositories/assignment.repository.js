"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentRepository = void 0;
const assignment_model_1 = require("../models/assignment.model");
exports.assignmentRepository = {
    findAll: () => assignment_model_1.Assignment.findAll({ include: ['Course', 'Submissions'] }),
    findById: (id) => assignment_model_1.Assignment.findByPk(id, { include: ['Course', 'Submissions'] }),
    create: (data) => assignment_model_1.Assignment.create(data),
    update: (id, data) => assignment_model_1.Assignment.update(data, { where: { id }, returning: true }),
    delete: (id) => assignment_model_1.Assignment.destroy({ where: { id } }),
    findByCourse: (courseId) => assignment_model_1.Assignment.findAll({ where: { courseId } }),
};
//# sourceMappingURL=assignment.repository.js.map