import { Request, Response } from 'express';
import { activityService } from '../services/activity.service';
import { handleServiceError } from '../utils/helpers';

export const activityController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const activities = await activityService.getAll();
      res.status(200).json(activities);
    } catch (error) {
      handleServiceError(error, 'Get All Activities');
      res.status(500).json({ message: 'Failed to fetch activities' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const activity = await activityService.getById(Number(req.params.id));
      if (!activity) return res.status(404).json({ message: 'Activity not found' });
      res.status(200).json(activity);
    } catch (error) {
      handleServiceError(error, 'Get Activity by ID');
      res.status(500).json({ message: 'Failed to fetch activity' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const activity = await activityService.create(req.body);
      res.status(201).json(activity);
    } catch (error) {
      handleServiceError(error, 'Create Activity');
      res.status(400).json({ message: 'Failed to create activity' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await activityService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Activity');
      res.status(500).json({ message: 'Failed to delete activity' });
    }
  },
  getByUser: async (req: Request, res: Response) => {
    try {
      const activities = await activityService.getByUser(Number(req.params.userId));
      res.status(200).json(activities);
    } catch (error) {
      handleServiceError(error, 'Get Activities by User');
      res.status(500).json({ message: 'Failed to fetch activities by user' });
    }
  },
};