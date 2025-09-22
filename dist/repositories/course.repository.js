"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRepository = void 0;
const course_model_1 = require("../models/course.model");
exports.courseRepository = {
    findAll: () => course_model_1.Course.findAll({ include: ['Creator', 'Modules'] }),
    findById: (id) => course_model_1.Course.findByPk(id, { include: ['Creator', 'Modules', 'EnrolledUsers'] }),
    create: (data) => course_model_1.Course.create(data),
    update: (id, data) => course_model_1.Course.update(data, { where: { id }, returning: true }),
    delete: (id) => course_model_1.Course.destroy({ where: { id } }),
    findByTeacher: (teacherId) => course_model_1.Course.findAll({ where: { createdBy: teacherId } }),
};
//# sourceMappingURL=course.repository.js.map