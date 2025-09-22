import { scheduleRepository } from '../repositories/schedule.repository';
import { logger } from '../utils/logger';

export const scheduleService = {
  getAll: () => scheduleRepository.findAll(),
  getById: (id: number) => scheduleRepository.findById(id),
  create: (data: { day: string; time: string; courseId: number }) => scheduleRepository.create(data),
  update: (id: number, data: Partial<{ day: string; time: string }>) => scheduleRepository.update(id, data),
  delete: (id: number) => scheduleRepository.delete(id),
  getByCourse: (courseId: number) => scheduleRepository.findByCourse(courseId),
};