import { lessonRepository } from '../repositories/lesson.repository';
import { logger } from '../utils/logger';

export const lessonService = {
  getAll: () => lessonRepository.findAll(),
  getById: (id: number) => lessonRepository.findById(id),
  create: (data: { title: string; content: string; moduleId: number }) => lessonRepository.create(data),
  update: (id: number, data: Partial<{ title: string; content: string }>) => lessonRepository.update(id, data),
  delete: (id: number) => lessonRepository.delete(id),
  getByModule: (moduleId: number) => lessonRepository.findByModule(moduleId),
};