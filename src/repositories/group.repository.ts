import { Group } from '../models/group.model';

export const groupRepository = {
  findAll: () => Group.findAll({ include: ['Members'] }),
  findById: (id: number) => Group.findByPk(id, { include: ['Members'] }),
  create: (data: Partial<Group>) => Group.create(data),
  update: (id: number, data: Partial<Group>) => Group.update(data, { where: { id }, returning: true }),
  delete: (id: number) => Group.destroy({ where: { id } }),
  findByLevel: (level: string) => Group.findAll({ where: { level } }),
};