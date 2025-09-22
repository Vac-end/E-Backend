"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleService = void 0;
const schedule_repository_1 = require("../repositories/schedule.repository");
exports.scheduleService = {
    getAll: () => schedule_repository_1.scheduleRepository.findAll(),
    getById: (id) => schedule_repository_1.scheduleRepository.findById(id),
    create: (data) => schedule_repository_1.scheduleRepository.create(data),
    update: (id, data) => schedule_repository_1.scheduleRepository.update(id, data),
    delete: (id) => schedule_repository_1.scheduleRepository.delete(id),
    getByCourse: (courseId) => schedule_repository_1.scheduleRepository.findByCourse(courseId),
};
//# sourceMappingURL=schedule.service.js.map