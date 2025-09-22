import { User, UserCreationAttributes } from '../models/user.model';

export const userRepository = {
  findAll: () => User.findAll({ attributes: { exclude: ['password'] } }),
  findById: (id: number) => User.findByPk(id, { attributes: { exclude: ['password'] } }),
  findByEmail: (email: string) => User.findOne({ where: { email }, attributes: { exclude: ['password'] } }),
  findByEmailWithPassword: (email: string) => User.findOne({ where: { email }, attributes: ['id', 'email', 'password', 'role'] }),
  findByUsername: (username: string) => User.findOne({ where: { username }, attributes: { exclude: ['password'] } }),
  create: (data: UserCreationAttributes) => User.create(data),
  update: (id: number, data: Partial<UserCreationAttributes>) => User.update(data, { where: { id }, returning: true }),
  delete: (id: number) => User.destroy({ where: { id } }),
  findByRole: (role: 'niño' | 'docente' | 'administrador') => User.findAll({ where: { role } }),
};