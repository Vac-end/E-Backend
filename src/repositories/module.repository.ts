import { Module } from '../models/module.model';

export const moduleRepository = {
  findAll: () => Module.findAll({ include: ['Course', 'Lessons'] }),
  findById: (id: number) => Module.findByPk(id, { include: ['Course', 'Lessons'] }),
  create: (data: Partial<Module>) => Module.create(data),
  update: (id: number, data: Partial<Module>) => Module.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Module.destroy({ where: { id } }),
  findByCourse: (courseId: number) => Module.findAll({ where: { courseId } }),
};