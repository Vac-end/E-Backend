import { assignmentRepository } from '../repositories/assignment.repository';
import { logger } from '../utils/logger';

export const assignmentService = {
  getAll: () => assignmentRepository.findAll(),
  getById: (id: number) => assignmentRepository.findById(id),
  create: (data: { title: string; description: string; dueDate: Date; courseId: number }) => assignmentRepository.create(data),
  update: (id: number, data: Partial<{ title: string; description: string; dueDate: Date }>) => assignmentRepository.update(id, data),
  delete: (id: number) => assignmentRepository.delete(id),
  getByCourse: (courseId: number) => assignmentRepository.findByCourse(courseId),
};