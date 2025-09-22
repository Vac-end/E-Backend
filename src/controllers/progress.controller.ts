import { Request, Response } from 'express';
import { progressService } from '../services/progress.service';
import { handleServiceError } from '../utils/helpers';

export const progressController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.getAll();
      res.status(200).json(progress);
    } catch (error) {
      handleServiceError(error, 'Get All Progress');
      res.status(500).json({ message: 'Failed to fetch progress' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.getById(Number(req.params.id));
      if (!progress) return res.status(404).json({ message: 'Progress not found' });
      res.status(200).json(progress);
    } catch (error) {
      handleServiceError(error, 'Get Progress by ID');
      res.status(500).json({ message: 'Failed to fetch progress' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.create(req.body);
      res.status(201).json(progress);
    } catch (error) {
      handleServiceError(error, 'Create Progress');
      res.status(400).json({ message: 'Failed to create progress' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.update(Number(req.params.id), req.body);
      if (!progress) return res.status(404).json({ message: 'Progress not found' });
      res.status(200).json(progress);
    } catch (error) {
      handleServiceError(error, 'Update Progress');
      res.status(400).json({ message: 'Failed to update progress' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await progressService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Progress');
      res.status(500).json({ message: 'Failed to delete progress' });
    }
  },
  getByUser: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.getByUser(Number(req.params.userId));
      res.status(200).json(progress);
    } catch (error) {
      handleServiceError(error, 'Get Progress by User');
      res.status(500).json({ message: 'Failed to fetch progress by user' });
    }
  },
  getByLesson: async (req: Request, res: Response) => {
    try {
      const progress = await progressService.getByLesson(Number(req.params.lessonId));
      res.status(200).json(progress);
    } catch (error) {
      handleServiceError(error, 'Get Progress by Lesson');
      res.status(500).json({ message: 'Failed to fetch progress by lesson' });
    }
  },
};