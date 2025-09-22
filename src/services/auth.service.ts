import { userRepository } from '../repositories/user.repository';
import { refreshTokenRepository } from '../repositories/refreshToken.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envConfig } from '../config/env.config';
import { emailService } from './email.service';
import { v4 as uuidv4 } from 'uuid';

export const authService = {
  login: async (email: string, password: string) => {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const user = await userRepository.findByEmailWithPassword(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    if (!user.password) {
       throw new Error('Invalid user data: password not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }
    const accessToken = jwt.sign({ id: user.id, role: user.role }, envConfig.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, envConfig.REFRESH_SECRET, { expiresIn: '7d' });
    await refreshTokenRepository.create({ token: refreshToken, userId: user.id, expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
    return { accessToken, refreshToken };
  },
  refresh: async (token: string) => {
    const refreshToken = await refreshTokenRepository.findByToken(token);
    if (!refreshToken || refreshToken.expires < new Date()) {
      throw new Error('Invalid or expired refresh token');
    }
    const decoded = jwt.verify(token, envConfig.REFRESH_SECRET) as { id: number };
    const user = await userRepository.findById(decoded.id);
    if (!user) throw new Error('User not found');
    return jwt.sign({ id: user.id, role: user.role }, envConfig.JWT_SECRET, { expiresIn: '15m' });
  },
  logout: async (token: string) => {
    await refreshTokenRepository.deleteByToken(token);
  },
  recoverPassword: async (email: string) => {
    const user = await userRepository.findByEmail(email);
    if (!user) return;
    const recoveryToken = uuidv4();
    await emailService.send(email, 'Password Recovery', `Use this token to reset your password: ${recoveryToken}`);

  },
  resetPassword: async (token: string, newPassword: string) => {
    const user = await userRepository.findByEmail('example@example.com');
    if (!user) throw new Error('Invalid recovery token');
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await userRepository.update(user.id, { password: hashedPassword });
  },
};