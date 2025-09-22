import { Request, Response } from 'express';
import { courseService } from '../services/course.service';
import { handleServiceError } from '../utils/helpers';

export const courseController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const courses = await courseService.getAll();
      res.status(200).json(courses);
    } catch (error) {
      handleServiceError(error, 'Get All Courses');
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const course = await courseService.getById(Number(req.params.id));
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.status(200).json(course);
    } catch (error) {
      handleServiceError(error, 'Get Course by ID');
      res.status(500).json({ message: 'Failed to fetch course' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const course = await courseService.create(req.body);
      res.status(201).json(course);
    } catch (error) {
      handleServiceError(error, 'Create Course');
      res.status(400).json({ message: 'Failed to create course' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const course = await courseService.update(Number(req.params.id), req.body);
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.status(200).json(course);
    } catch (error) {
      handleServiceError(error, 'Update Course');
      res.status(400).json({ message: 'Failed to update course' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await courseService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Course');
      res.status(500).json({ message: 'Failed to delete course' });
    }
  },
  getByTeacher: async (req: Request, res: Response) => {
    try {
      const courses = await courseService.getByTeacher(Number(req.params.teacherId));
      res.status(200).json(courses);
    } catch (error) {
      handleServiceError(error, 'Get Courses by Teacher');
      res.status(500).json({ message: 'Failed to fetch courses by teacher' });
    }
  },
};