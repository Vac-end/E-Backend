import { Assignment } from '../models/assignment.model';

export const assignmentRepository = {
  findAll: () => Assignment.findAll({ include: ['Course', 'Submissions'] }),
  findById: (id: number) => Assignment.findByPk(id, { include: ['Course', 'Submissions'] }),
  create: (data: Partial<Assignment>) => Assignment.create(data),
  update: (id: number, data: Partial<Assignment>) => Assignment.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Assignment.destroy({ where: { id } }),
  findByCourse: (courseId: number) => Assignment.findAll({ where: { courseId } }),
};