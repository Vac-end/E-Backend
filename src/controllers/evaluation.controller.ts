import { Request, Response } from 'express';
import { evaluationService } from '../services/evaluation.service';
import { handleServiceError } from '../utils/helpers';

export const evaluationController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const evaluations = await evaluationService.getAll();
      res.status(200).json(evaluations);
    } catch (error) {
      handleServiceError(error, 'Get All Evaluations');
      res.status(500).json({ message: 'Failed to fetch evaluations' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const evaluation = await evaluationService.getById(Number(req.params.id));
      if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });
      res.status(200).json(evaluation);
    } catch (error) {
      handleServiceError(error, 'Get Evaluation by ID');
      res.status(500).json({ message: 'Failed to fetch evaluation' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const evaluation = await evaluationService.create(req.body);
      res.status(201).json(evaluation);
    } catch (error) {
      handleServiceError(error, 'Create Evaluation');
      res.status(400).json({ message: 'Failed to create evaluation' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const evaluation = await evaluationService.update(Number(req.params.id), req.body);
      if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });
      res.status(200).json(evaluation);
    } catch (error) {
      handleServiceError(error, 'Update Evaluation');
      res.status(400).json({ message: 'Failed to update evaluation' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await evaluationService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Evaluation');
      res.status(500).json({ message: 'Failed to delete evaluation' });
    }
  },
  getByLesson: async (req: Request, res: Response) => {
    try {
      const evaluations = await evaluationService.getByLesson(Number(req.params.lessonId));
      res.status(200).json(evaluations);
    } catch (error) {
      handleServiceError(error, 'Get Evaluations by Lesson');
      res.status(500).json({ message: 'Failed to fetch evaluations by lesson' });
    }
  },
};