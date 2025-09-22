import { Progress } from '../models/progress.model';

export const progressRepository = {
  findAll: () => Progress.findAll({ include: ['User', 'Lesson'] }),
  findById: (id: number) => Progress.findByPk(id, { include: ['User', 'Lesson'] }),
  create: (data: Partial<Progress>) => Progress.create(data),
  update: (id: number, data: Partial<Progress>) => Progress.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Progress.destroy({ where: { id } }),
  findByUser: (userId: number) => Progress.findAll({ where: { userId } }),
  findByLesson: (lessonId: number) => Progress.findAll({ where: { lessonId } }),
};