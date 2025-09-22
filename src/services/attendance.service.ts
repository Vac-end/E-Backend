import { attendanceRepository } from '../repositories/attendance.repository';
import { logger } from '../utils/logger';

export const attendanceService = {
  getAll: () => attendanceRepository.findAll(),
  getById: (id: number) => attendanceRepository.findById(id),
  create: (data: { date: Date; present: boolean; studentId: number; scheduleId: number }) => attendanceRepository.create(data),
  update: (id: number, data: Partial<{ present: boolean }>) => attendanceRepository.update(id, data),
  delete: (id: number) => attendanceRepository.delete(id),
  getByStudent: (studentId: number) => attendanceRepository.findByStudent(studentId),
  getBySchedule: (scheduleId: number) => attendanceRepository.findBySchedule(scheduleId),
};