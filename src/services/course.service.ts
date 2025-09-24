import { courseRepository } from '../repositories/course.repository';
import { logger } from '../utils/logger';

export const courseService = {
  getAll: () => courseRepository.findAll(),
  getById: (id: number) => courseRepository.findById(id),
  create: (data: { title: string; description: string; createdBy: number, gradeLevelId: number }) => courseRepository.create(data),
  update: (id: number, data: Partial<{ title: string; description: string, gradeLevelId?: number  }>) => courseRepository.update(id, data),
  delete: (id: number) => courseRepository.delete(id),
  getByTeacher: (teacherId: number) => courseRepository.findByTeacher(teacherId),
};