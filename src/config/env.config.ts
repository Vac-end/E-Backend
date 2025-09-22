import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  PORT: parseInt(process.env.PORT || '3000', 10),
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || 'your-jwt-secret',
  REFRESH_SECRET: process.env.REFRESH_SECRET || 'your-refresh-secret',
  EMAIL_USER: process.env.EMAIL_USER || '',
  EMAIL_PASS: process.env.EMAIL_PASS || '',
  FRONTEND_URL: process.env.FRONTEND_URL || '',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
};