import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { handleServiceError } from '../utils/helpers';

export const authController = {
  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
      }
      const { accessToken, refreshToken, role, id} = await authService.login(email, password);
      res.status(200).json({ accessToken, refreshToken, role, id});
    } catch (error) {
      handleServiceError(error, 'Login');
      res.status(401).json({ message: 'Invalid credentials' });
    }
  },
  refresh: async (req: Request, res: Response) => {
    try {
      const { token } = req.body;
      const accessToken = await authService.refresh(token);
      res.status(200).json({ accessToken });
    } catch (error) {
      handleServiceError(error, 'Refresh');
      res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
  },
  logout: async (req: Request, res: Response) => {
    try {
      const { token } = req.body;
      await authService.logout(token);
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      handleServiceError(error, 'Logout');
      res.status(500).json({ message: 'Logout failed' });
    }
  },
  recoverPassword: async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      await authService.recoverPassword(email);
      res.status(200).json({ message: 'Recovery email sent if account exists' });
    } catch (error) {
      handleServiceError(error, 'Recover Password');
      res.status(500).json({ message: 'Failed to send recovery email' });
    }
  },
  resetPassword: async (req: Request, res: Response) => {
    try {
      const { token, newPassword } = req.body;
      await authService.resetPassword(token, newPassword);
      res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
      handleServiceError(error, 'Reset Password');
      res.status(400).json({ message: 'Invalid recovery token or password reset failed' });
    }
  },
};