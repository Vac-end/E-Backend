import { progressRepository } from '../repositories/progress.repository';
import { logger } from '../utils/logger';

export const progressService = {
  getAll: () => progressRepository.findAll(),
  getById: (id: number) => progressRepository.findById(id),
  create: (data: { userId: number; lessonId: number; completed: boolean; score?: number }) => progressRepository.create(data),
  update: (id: number, data: Partial<{ completed: boolean; score?: number }>) => progressRepository.update(id, data),
  delete: (id: number) => progressRepository.delete(id),
  getByUser: (userId: number) => progressRepository.findByUser(userId),
  getByLesson: (lessonId: number) => progressRepository.findByLesson(lessonId),
};