import { Grade } from '../models/grade.model';

export const gradeRepository = {
  findAll: () => Grade.findAll({ include: ['Submission', 'Teacher'] }),
  findById: (id: number) => Grade.findByPk(id, { include: ['Submission', 'Teacher'] }),
  create: (data: Partial<Grade>) => Grade.create(data),
  update: (id: number, data: Partial<Grade>) => Grade.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Grade.destroy({ where: { id } }),
  findBySubmission: (submissionId: number) => Grade.findOne({ where: { submissionId } }),
  findByTeacher: (teacherId: number) => Grade.findAll({ where: { teacherId } }),
};