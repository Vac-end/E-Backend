import { Request, Response } from 'express';
import { submissionService } from '../services/submission.service';
import { handleServiceError } from '../utils/helpers';

export const submissionController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const submissions = await submissionService.getAll();
      res.status(200).json(submissions);
    } catch (error) {
      handleServiceError(error, 'Get All Submissions');
      res.status(500).json({ message: 'Failed to fetch submissions' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const submission = await submissionService.getById(Number(req.params.id));
      if (!submission) return res.status(404).json({ message: 'Submission not found' });
      res.status(200).json(submission);
    } catch (error) {
      handleServiceError(error, 'Get Submission by ID');
      res.status(500).json({ message: 'Failed to fetch submission' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const submission = await submissionService.create(req.body);
      res.status(201).json(submission);
    } catch (error) {
      handleServiceError(error, 'Create Submission');
      res.status(400).json({ message: 'Failed to create submission' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const submission = await submissionService.update(Number(req.params.id), req.body);
      if (!submission) return res.status(404).json({ message: 'Submission not found' });
      res.status(200).json(submission);
    } catch (error) {
      handleServiceError(error, 'Update Submission');
      res.status(400).json({ message: 'Failed to update submission' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await submissionService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Submission');
      res.status(500).json({ message: 'Failed to delete submission' });
    }
  },
  getByAssignment: async (req: Request, res: Response) => {
    try {
      const submissions = await submissionService.getByAssignment(Number(req.params.assignmentId));
      res.status(200).json(submissions);
    } catch (error) {
      handleServiceError(error, 'Get Submissions by Assignment');
      res.status(500).json({ message: 'Failed to fetch submissions by assignment' });
    }
  },
  getByStudent: async (req: Request, res: Response) => {
    try {
      const submissions = await submissionService.getByStudent(Number(req.params.studentId));
      res.status(200).json(submissions);
    } catch (error) {
      handleServiceError(error, 'Get Submissions by Student');
      res.status(500).json({ message: 'Failed to fetch submissions by student' });
    }
  },
};