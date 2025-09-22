import { activityRepository } from '../repositories/activity.repository';
import { logger } from '../utils/logger';

export const activityService = {
  getAll: () => activityRepository.findAll(),
  getById: (id: number) => activityRepository.findById(id),
  create: (data: { userId: number; action: string; details?: string }) => activityRepository.create(data),
  delete: (id: number) => activityRepository.delete(id),
  getByUser: (userId: number) => activityRepository.findByUser(userId),
};