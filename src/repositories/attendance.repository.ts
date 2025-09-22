import { Attendance } from '../models/attendance.model';

export const attendanceRepository = {
  findAll: () => Attendance.findAll({ include: ['Schedule', 'Student'] }),
  findById: (id: number) => Attendance.findByPk(id, { include: ['Schedule', 'Student'] }),
  create: (data: Partial<Attendance>) => Attendance.create(data),
  update: (id: number, data: Partial<Attendance>) => Attendance.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Attendance.destroy({ where: { id } }),
  findByStudent: (studentId: number) => Attendance.findAll({ where: { studentId } }),
  findBySchedule: (scheduleId: number) => Attendance.findAll({ where: { scheduleId } }),
};