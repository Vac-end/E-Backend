import { Lesson } from '../models/lesson.model';

export const lessonRepository = {
  findAll: () => Lesson.findAll({ include: ['Module', 'Evaluations', 'Progresses'] }),
  findById: (id: number) => Lesson.findByPk(id, { include: ['Module', 'Evaluations', 'Progresses'] }),
  create: (data: Partial<Lesson>) => Lesson.create(data),
  update: (id: number, data: Partial<Lesson>) => Lesson.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Lesson.destroy({ where: { id } }),
  findByModule: (moduleId: number) => Lesson.findAll({ where: { moduleId } }),
};