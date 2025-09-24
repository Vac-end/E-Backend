import { Group, GroupCreationAttributes } from '../models/group.model';
import { User } from '../models/user.model';
import { Course } from '../models/course.model';

export const groupRepository = {
  findAll: () => Group.findAll({ include: ['Course', 'Members', 'Creator'] }),
  findById: (id: number) => Group.findByPk(id, { include: ['Course', 'Members', 'Creator'] }),
  create: (data: GroupCreationAttributes) => Group.create(data),
  update: (id: number, data: Partial<GroupCreationAttributes>) => Group.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Group.destroy({ where: { id } }),
  findByCourse: (courseId: number) => Group.findAll({ where: { courseId }, include: ['Members', 'Creator'] }),
};