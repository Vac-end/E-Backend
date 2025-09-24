import { Request, Response } from 'express';
import { courseTeacherService } from '../services/courseTeacher.service';
import { handleServiceError } from '../utils/helpers';

export const courseTeacherController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const courseTeachers = await courseTeacherService.getAll();
      res.status(200).json(courseTeachers);
    } catch (error) {
      handleServiceError(error, 'Get All CourseTeachers');
      res.status(500).json({ message: 'Failed to fetch course teachers' });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params;
      const courseTeacher = await courseTeacherService.getById(Number(userId), Number(courseId));
      if (!courseTeacher) return res.status(404).json({ message: 'CourseTeacher assignment not found' });
      res.status(200).json(courseTeacher);
    } catch (error) {
      handleServiceError(error, 'Get CourseTeacher by ID');
      res.status(500).json({ message: 'Failed to fetch course teacher' });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.body;
      const courseTeacher = await courseTeacherService.create(Number(userId), Number(courseId));
      res.status(201).json(courseTeacher);
    } catch (error) {
      handleServiceError(error, 'Create CourseTeacher');
      res.status(500).json({ message: 'Failed to assign teacher to course' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params;
      const courseTeacher = await courseTeacherService.update(Number(userId), Number(courseId), req.body as Partial<{ assignedAt: Date }>);
      if (!courseTeacher) return res.status(404).json({ message: 'CourseTeacher assignment not found' });
      res.status(200).json(courseTeacher);
    } catch (error) {
      handleServiceError(error, 'Update CourseTeacher');
      res.status(500).json({ message: 'Failed to update course teacher assignment' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { userId, courseId } = req.params;
      await courseTeacherService.delete(Number(userId), Number(courseId));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete CourseTeacher');
      res.status(500).json({ message: 'Failed to delete course teacher assignment' });
    }
  },
};