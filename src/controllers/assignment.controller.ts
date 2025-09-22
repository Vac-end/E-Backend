import { Request, Response } from 'express';
import { assignmentService } from '../services/assignment.service';
import { handleServiceError } from '../utils/helpers';

export const assignmentController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const assignments = await assignmentService.getAll();
      res.status(200).json(assignments);
    } catch (error) {
      handleServiceError(error, 'Get All Assignments');
      res.status(500).json({ message: 'Failed to fetch assignments' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const assignment = await assignmentService.getById(Number(req.params.id));
      if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
      res.status(200).json(assignment);
    } catch (error) {
      handleServiceError(error, 'Get Assignment by ID');
      res.status(500).json({ message: 'Failed to fetch assignment' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const assignment = await assignmentService.create(req.body);
      res.status(201).json(assignment);
    } catch (error) {
      handleServiceError(error, 'Create Assignment');
      res.status(400).json({ message: 'Failed to create assignment' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const assignment = await assignmentService.update(Number(req.params.id), req.body);
      if (!assignment) return res.status(404).json({ message: 'Assignment not found' });
      res.status(200).json(assignment);
    } catch (error) {
      handleServiceError(error, 'Update Assignment');
      res.status(400).json({ message: 'Failed to update assignment' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await assignmentService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Assignment');
      res.status(500).json({ message: 'Failed to delete assignment' });
    }
  },
  getByCourse: async (req: Request, res: Response) => {
    try {
      const assignments = await assignmentService.getByCourse(Number(req.params.courseId));
      res.status(200).json(assignments);
    } catch (error) {
      handleServiceError(error, 'Get Assignments by Course');
      res.status(500).json({ message: 'Failed to fetch assignments by course' });
    }
  },
};