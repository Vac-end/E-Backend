import { GradeLevel } from '../models/gradelevel.model';

export const gradeLevelRepository = {
  findAll: () => GradeLevel.findAll(),
  findById: (id: number) => GradeLevel.findByPk(id),
  create: (data: { level: string; category: 'Inicial' | 'Primaria' | 'Secundaria' }) => GradeLevel.create(data),
  update: (id: number, data: Partial<{ level: string; category: 'Inicial' | 'Primaria' | 'Secundaria' }>) =>
    GradeLevel.update(data, { where: { id }, returning: true }),
  delete: (id: number) => GradeLevel.destroy({ where: { id } }),
  findByCategory: (category: 'Inicial' | 'Primaria' | 'Secundaria') => GradeLevel.findAll({ where: { category } }),
};