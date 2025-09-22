import { Submission } from '../models/submission.model';

export const submissionRepository = {
  findAll: () => Submission.findAll({ include: ['Assignment', 'Student', 'Grade'] }),
  findById: (id: number) => Submission.findByPk(id, { include: ['Assignment', 'Student', 'Grade'] }),
  create: (data: Partial<Submission>) => Submission.create(data),
  update: (id: number, data: Partial<Submission>) => Submission.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Submission.destroy({ where: { id } }),
  findByAssignment: (assignmentId: number) => Submission.findAll({ where: { assignmentId } }),
  findByStudent: (studentId: number) => Submission.findAll({ where: { studentId } }),
};