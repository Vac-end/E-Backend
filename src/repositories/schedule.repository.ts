import { Schedule } from '../models/schedule.model';

export const scheduleRepository = {
  findAll: () => Schedule.findAll({ include: ['Course', 'Attendances'] }),
  findById: (id: number) => Schedule.findByPk(id, { include: ['Course', 'Attendances'] }),
  create: (data: Partial<Schedule>) => Schedule.create(data),
  update: (id: number, data: Partial<Schedule>) => Schedule.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Schedule.destroy({ where: { id } }),
  findByCourse: (courseId: number) => Schedule.findAll({ where: { courseId } }),
};