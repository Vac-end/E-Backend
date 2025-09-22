import { RefreshToken } from '../models/refreshtoken.model';

export const refreshTokenRepository = {
  findAll: () => RefreshToken.findAll({ include: ['User'] }),
  findById: (id: number) => RefreshToken.findByPk(id, { include: ['User'] }),
  findByToken: (token: string) => RefreshToken.findOne({ where: { token } }),
  create: (data: Partial<RefreshToken>) => RefreshToken.create(data),
  delete: (id: number) => RefreshToken.destroy({ where: { id } }),
  deleteByToken: (token: string) => RefreshToken.destroy({ where: { token } }),
  findByUser: (userId: number) => RefreshToken.findAll({ where: { userId } }),
};