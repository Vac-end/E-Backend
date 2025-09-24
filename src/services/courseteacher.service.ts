import { courseTeacherRepository } from '../repositories/courseteacher.repository';
import { User } from '../models/user.model';
import { Course } from '../models/course.model';
import { handleServiceError } from '../utils/helpers';

export const courseTeacherService = {
  getAll: async () => {
    try {
      const courseTeachers = await courseTeacherRepository.findAll();
      return courseTeachers;
    } catch (error) {
      handleServiceError(error, 'Get All CourseTeachers');
      throw error;
    }
  },

  getById: async (userId: number, courseId: number) => {
    try {
      const courseTeacher = await courseTeacherRepository.findById(userId, courseId);
      if (!courseTeacher) throw new Error('CourseTeacher assignment not found');
      return courseTeacher;
    } catch (error) {
      handleServiceError(error, 'Get CourseTeacher by ID');
      throw error;
    }
  },

  create: async (userId: number, courseId: number) => {
    try {
      const userExists = await User.findByPk(userId);
      if (!userExists || userExists.role !== 'docente') throw new Error('Invalid teacher');
      const courseExists = await Course.findByPk(courseId);
      if (!courseExists) throw new Error('Course not found');
      const courseTeacher = await courseTeacherRepository.create({ userId, courseId });
      return courseTeacher;
    } catch (error) {
      handleServiceError(error, 'Create CourseTeacher');
      throw error;
    }
  },

  update: async (userId: number, courseId: number, data: Partial<{ assignedAt: Date }>) => {
    try {
      const updated = await courseTeacherRepository.update(userId, courseId, data);
      if (!updated) throw new Error('CourseTeacher assignment not found');
      return updated;
    } catch (error) {
      handleServiceError(error, 'Update CourseTeacher');
      throw error;
    }
  },

  delete: async (userId: number, courseId: number) => {
    try {
      const deleted = await courseTeacherRepository.delete(userId, courseId);
      if (!deleted) throw new Error('CourseTeacher assignment not found');
      return deleted;
    } catch (error) {
      handleServiceError(error, 'Delete CourseTeacher');
      throw error;
    }
  },
};