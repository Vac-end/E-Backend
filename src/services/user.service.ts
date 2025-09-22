import { userRepository } from '../repositories/user.repository';
import bcrypt from 'bcrypt';
import { logger } from '../utils/logger';

export const userService = {
  getAll: () => userRepository.findAll(),
  getById: (id: number) => userRepository.findById(id),
  create: async (data: { username: string; email: string; password: string; role: 'niño' | 'docente' | 'administrador'; name?: string; grade?: string; groupId?: number }) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return userRepository.create({ ...data, password: hashedPassword });
  },
  update: (id: number, data: Partial<{ username: string; email: string; name?: string; grade?: string; groupId?: number; password?: string }>) => {
    if (data.password) throw new Error('Password update not allowed via this method');
    return userRepository.update(id, data);
  },
  delete: (id: number) => userRepository.delete(id),
  getByRole: (role: 'niño' | 'docente' | 'administrador') => userRepository.findByRole(role),
};