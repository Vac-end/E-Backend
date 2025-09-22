import { JwtPayload } from 'jsonwebtoken';

declare module 'express' {
  interface Request {
    user?: JwtPayload | { id: number; role: string; iat: number; exp: number };
  }
}