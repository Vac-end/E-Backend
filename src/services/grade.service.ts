import { gradeRepository } from '../repositories/grade.repository';
import { logger } from '../utils/logger';

export const gradeService = {
  getAll: () => gradeRepository.findAll(),
  getById: (id: number) => gradeRepository.findById(id),
  create: (data: { score: number; comments?: string; submissionId: number; teacherId: number }) => gradeRepository.create(data),
  update: (id: number, data: Partial<{ score: number; comments?: string }>) => gradeRepository.update(id, data),
  delete: (id: number) => gradeRepository.delete(id),
  getBySubmission: (submissionId: number) => gradeRepository.findBySubmission(submissionId),
  getByTeacher: (teacherId: number) => gradeRepository.findByTeacher(teacherId),
};