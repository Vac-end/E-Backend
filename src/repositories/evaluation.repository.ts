import { Evaluation } from '../models/evaluation.model';

export const evaluationRepository = {
  findAll: () => Evaluation.findAll({ include: ['Lesson'] }),
  findById: (id: number) => Evaluation.findByPk(id, { include: ['Lesson'] }),
  create: (data: Partial<Evaluation>) => Evaluation.create(data),
  update: (id: number, data: Partial<Evaluation>) => Evaluation.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Evaluation.destroy({ where: { id } }),
  findByLesson: (lessonId: number) => Evaluation.findAll({ where: { lessonId } }),
};