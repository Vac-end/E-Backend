"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseService = void 0;
const course_repository_1 = require("../repositories/course.repository");
exports.courseService = {
    getAll: () => course_repository_1.courseRepository.findAll(),
    getById: (id) => course_repository_1.courseRepository.findById(id),
    create: (data) => course_repository_1.courseRepository.create(data),
    update: (id, data) => course_repository_1.courseRepository.update(id, data),
    delete: (id) => course_repository_1.courseRepository.delete(id),
    getByTeacher: (teacherId) => course_repository_1.courseRepository.findByTeacher(teacherId),
};
//# sourceMappingURL=course.service.js.map