import { submissionRepository } from '../repositories/submmission.repository';
import { logger } from '../utils/logger';
import { sanitize } from '../utils/sanitizer';

export const submissionService = {
  getAll: () => submissionRepository.findAll(),
  getById: (id: number) => submissionRepository.findById(id),
  create: (data: { filePath: string; status: 'pendiente' | 'entregado' | 'calificado'; assignmentId: number; studentId: number }) => {
    const sanitizedFilePath = sanitize(data.filePath); // Prevent XSS in file paths
    return submissionRepository.create({ ...data, filePath: sanitizedFilePath });
  },
  update: (id: number, data: Partial<{ status: 'pendiente' | 'entregado' | 'calificado'; filePath?: string }>) => {
    if (data.filePath) data.filePath = sanitize(data.filePath);
    return submissionRepository.update(id, data);
  },
  delete: (id: number) => submissionRepository.delete(id),
  getByAssignment: (assignmentId: number) => submissionRepository.findByAssignment(assignmentId),
  getByStudent: (studentId: number) => submissionRepository.findByStudent(studentId),
};