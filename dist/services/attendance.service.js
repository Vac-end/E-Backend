"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceService = void 0;
const attendance_repository_1 = require("../repositories/attendance.repository");
exports.attendanceService = {
    getAll: () => attendance_repository_1.attendanceRepository.findAll(),
    getById: (id) => attendance_repository_1.attendanceRepository.findById(id),
    create: (data) => attendance_repository_1.attendanceRepository.create(data),
    update: (id, data) => attendance_repository_1.attendanceRepository.update(id, data),
    delete: (id) => attendance_repository_1.attendanceRepository.delete(id),
    getByStudent: (studentId) => attendance_repository_1.attendanceRepository.findByStudent(studentId),
    getBySchedule: (scheduleId) => attendance_repository_1.attendanceRepository.findBySchedule(scheduleId),
};
//# sourceMappingURL=attendance.service.js.map