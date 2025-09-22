import { Request, Response } from 'express';
import { moduleService } from '../services/module.service';
import { handleServiceError } from '../utils/helpers';

export const moduleController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const modules = await moduleService.getAll();
      res.status(200).json(modules);
    } catch (error) {
      handleServiceError(error, 'Get All Modules');
      res.status(500).json({ message: 'Failed to fetch modules' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const module = await moduleService.getById(Number(req.params.id));
      if (!module) return res.status(404).json({ message: 'Module not found' });
      res.status(200).json(module);
    } catch (error) {
      handleServiceError(error, 'Get Module by ID');
      res.status(500).json({ message: 'Failed to fetch module' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const module = await moduleService.create(req.body);
      res.status(201).json(module);
    } catch (error) {
      handleServiceError(error, 'Create Module');
      res.status(400).json({ message: 'Failed to create module' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const module = await moduleService.update(Number(req.params.id), req.body);
      if (!module) return res.status(404).json({ message: 'Module not found' });
      res.status(200).json(module);
    } catch (error) {
      handleServiceError(error, 'Update Module');
      res.status(400).json({ message: 'Failed to update module' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await moduleService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Module');
      res.status(500).json({ message: 'Failed to delete module' });
    }
  },
  getByCourse: async (req: Request, res: Response) => {
    try {
      const modules = await moduleService.getByCourse(Number(req.params.courseId));
      res.status(200).json(modules);
    } catch (error) {
      handleServiceError(error, 'Get Modules by Course');
      res.status(500).json({ message: 'Failed to fetch modules by course' });
    }
  },
};