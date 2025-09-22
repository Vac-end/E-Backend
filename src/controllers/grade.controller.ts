import { Request, Response } from 'express';
import { gradeService } from '../services/grade.service';
import { handleServiceError } from '../utils/helpers';

export const gradeController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const grades = await gradeService.getAll();
      res.status(200).json(grades);
    } catch (error) {
      handleServiceError(error, 'Get All Grades');
      res.status(500).json({ message: 'Failed to fetch grades' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const grade = await gradeService.getById(Number(req.params.id));
      if (!grade) return res.status(404).json({ message: 'Grade not found' });
      res.status(200).json(grade);
    } catch (error) {
      handleServiceError(error, 'Get Grade by ID');
      res.status(500).json({ message: 'Failed to fetch grade' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const grade = await gradeService.create(req.body);
      res.status(201).json(grade);
    } catch (error) {
      handleServiceError(error, 'Create Grade');
      res.status(400).json({ message: 'Failed to create grade' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const grade = await gradeService.update(Number(req.params.id), req.body);
      if (!grade) return res.status(404).json({ message: 'Grade not found' });
      res.status(200).json(grade);
    } catch (error) {
      handleServiceError(error, 'Update Grade');
      res.status(400).json({ message: 'Failed to update grade' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await gradeService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Grade');
      res.status(500).json({ message: 'Failed to delete grade' });
    }
  },
  getBySubmission: async (req: Request, res: Response) => {
    try {
      const grade = await gradeService.getBySubmission(Number(req.params.submissionId));
      if (!grade) return res.status(404).json({ message: 'Grade not found' });
      res.status(200).json(grade);
    } catch (error) {
      handleServiceError(error, 'Get Grade by Submission');
      res.status(500).json({ message: 'Failed to fetch grade by submission' });
    }
  },
  getByTeacher: async (req: Request, res: Response) => {
    try {
      const grades = await gradeService.getByTeacher(Number(req.params.teacherId));
      res.status(200).json(grades);
    } catch (error) {
      handleServiceError(error, 'Get Grades by Teacher');
      res.status(500).json({ message: 'Failed to fetch grades by teacher' });
    }
  },
};