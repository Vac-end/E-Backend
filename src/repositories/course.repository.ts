import { Course, CourseCreationAttributes } from '../models/course.model';

export const courseRepository = {
  findAll: () => Course.findAll({ include: ['Creator', 'Modules', 'GradoLevel'] }),
  findById: (id: number) => Course.findByPk(id, { include: ['Creator', 'Modules', 'EnrolledUsers', 'GradoLevel'] }),
  create: (data: CourseCreationAttributes) => Course.create(data),
  update: (id: number, data: Partial<CourseCreationAttributes>) => Course.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Course.destroy({ where: { id } }),
  findByTeacher: (teacherId: number) => Course.findAll({ where: { createdBy: teacherId }, include: ['GradeLevel'] }),
};