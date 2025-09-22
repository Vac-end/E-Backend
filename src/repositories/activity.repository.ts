import { Activity } from '../models/activity.model';

export const activityRepository = {
  findAll: () => Activity.findAll({ include: ['User'], order: [['createdAt', 'DESC']] }),
  findById: (id: number) => Activity.findByPk(id, { include: ['User'] }),
  create: (data: Partial<Activity>) => Activity.create(data),
  delete: (id: number) => Activity.destroy({ where: { id } }),
  findByUser: (userId: number) => Activity.findAll({ where: { userId }, order: [['createdAt', 'DESC']] }),
};