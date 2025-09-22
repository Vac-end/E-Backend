import { evaluationRepository } from '../repositories/evaluation.repository';
import { logger } from '../utils/logger';

export const evaluationService = {
  getAll: () => evaluationRepository.findAll(),
  getById: (id: number) => evaluationRepository.findById(id),
  create: (data: { title: string; type: 'Quiz' | 'Examen' | 'Tarea'; lessonId: number; questions?: string }) => evaluationRepository.create(data),
  update: (id: number, data: Partial<{ title: string; type: 'Quiz' | 'Examen' | 'Tarea'; questions?: string }>) => evaluationRepository.update(id, data),
  delete: (id: number) => evaluationRepository.delete(id),
  getByLesson: (lessonId: number) => evaluationRepository.findByLesson(lessonId),
};