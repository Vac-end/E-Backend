import { groupRepository } from '../repositories/group.repository';
import { logger } from '../utils/logger';

export const groupService = {
  getAll: () => groupRepository.findAll(),
  getById: (id: number) => groupRepository.findById(id),
  create: (data: { name: string; level: string }) => groupRepository.create(data),
  update: (id: number, data: Partial<{ name: string; level: string }>) => groupRepository.update(id, data),
  delete: (id: number) => groupRepository.delete(id),
  getByLevel: (level: string) => groupRepository.findByLevel(level),
};