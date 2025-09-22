import { Request, Response } from 'express';
import { lessonService } from '../services/lesson.service';
import { handleServiceError } from '../utils/helpers';

export const lessonController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const lessons = await lessonService.getAll();
      res.status(200).json(lessons);
    } catch (error) {
      handleServiceError(error, 'Get All Lessons');
      res.status(500).json({ message: 'Failed to fetch lessons' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const lesson = await lessonService.getById(Number(req.params.id));
      if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
      res.status(200).json(lesson);
    } catch (error) {
      handleServiceError(error, 'Get Lesson by ID');
      res.status(500).json({ message: 'Failed to fetch lesson' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const lesson = await lessonService.create(req.body);
      res.status(201).json(lesson);
    } catch (error) {
      handleServiceError(error, 'Create Lesson');
      res.status(400).json({ message: 'Failed to create lesson' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const lesson = await lessonService.update(Number(req.params.id), req.body);
      if (!lesson) return res.status(404).json({ message: 'Lesson not found' });
      res.status(200).json(lesson);
    } catch (error) {
      handleServiceError(error, 'Update Lesson');
      res.status(400).json({ message: 'Failed to update lesson' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await lessonService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Lesson');
      res.status(500).json({ message: 'Failed to delete lesson' });
    }
  },
  getByModule: async (req: Request, res: Response) => {
    try {
      const lessons = await lessonService.getByModule(Number(req.params.moduleId));
      res.status(200).json(lessons);
    } catch (error) {
      handleServiceError(error, 'Get Lessons by Module');
      res.status(500).json({ message: 'Failed to fetch lessons by module' });
    }
  },
};