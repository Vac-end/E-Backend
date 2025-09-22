import { moduleRepository } from '../repositories/module.repository';
import { logger } from '../utils/logger';

export const moduleService = {
  getAll: () => moduleRepository.findAll(),
  getById: (id: number) => moduleRepository.findById(id),
  create: (data: { title: string; courseId: number }) => moduleRepository.create(data),
  update: (id: number, data: Partial<{ title: string }>) => moduleRepository.update(id, data),
  delete: (id: number) => moduleRepository.delete(id),
  getByCourse: (courseId: number) => moduleRepository.findByCourse(courseId),
};