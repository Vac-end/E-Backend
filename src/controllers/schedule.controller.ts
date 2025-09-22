import { Request, Response } from 'express';
import { scheduleService } from '../services/schedule.service';
import { handleServiceError } from '../utils/helpers';

export const scheduleController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const schedules = await scheduleService.getAll();
      res.status(200).json(schedules);
    } catch (error) {
      handleServiceError(error, 'Get All Schedules');
      res.status(500).json({ message: 'Failed to fetch schedules' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.getById(Number(req.params.id));
      if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
      res.status(200).json(schedule);
    } catch (error) {
      handleServiceError(error, 'Get Schedule by ID');
      res.status(500).json({ message: 'Failed to fetch schedule' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.create(req.body);
      res.status(201).json(schedule);
    } catch (error) {
      handleServiceError(error, 'Create Schedule');
      res.status(400).json({ message: 'Failed to create schedule' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const schedule = await scheduleService.update(Number(req.params.id), req.body);
      if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
      res.status(200).json(schedule);
    } catch (error) {
      handleServiceError(error, 'Update Schedule');
      res.status(400).json({ message: 'Failed to update schedule' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await scheduleService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Schedule');
      res.status(500).json({ message: 'Failed to delete schedule' });
    }
  },
  getByCourse: async (req: Request, res: Response) => {
    try {
      const schedules = await scheduleService.getByCourse(Number(req.params.courseId));
      res.status(200).json(schedules);
    } catch (error) {
      handleServiceError(error, 'Get Schedules by Course');
      res.status(500).json({ message: 'Failed to fetch schedules by course' });
    }
  },
};