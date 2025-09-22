"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceRepository = void 0;
const attendance_model_1 = require("../models/attendance.model");
exports.attendanceRepository = {
    findAll: () => attendance_model_1.Attendance.findAll({ include: ['Schedule', 'Student'] }),
    findById: (id) => attendance_model_1.Attendance.findByPk(id, { include: ['Schedule', 'Student'] }),
    create: (data) => attendance_model_1.Attendance.create(data),
    update: (id, data) => attendance_model_1.Attendance.update(data, { where: { id }, returning: true }),
    delete: (id) => attendance_model_1.Attendance.destroy({ where: { id } }),
    findByStudent: (studentId) => attendance_model_1.Attendance.findAll({ where: { studentId } }),
    findBySchedule: (scheduleId) => attendance_model_1.Attendance.findAll({ where: { scheduleId } }),
};
//# sourceMappingURL=attendance.repository.js.map