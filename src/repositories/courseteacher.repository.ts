import { CourseTeacher, CourseTeacherCreationAttributes } from '../models/courseteacher.model';
import { User } from '../models/user.model';
import { Course } from '../models/course.model';

export const courseTeacherRepository = {
  findAll: () => CourseTeacher.findAll({ include: ['Teacher', 'Course', { model: Course, as: 'Course', include: ['GradeLevel'] }] }),
  findById: (userId: number, courseId: number) => CourseTeacher.findOne({ where: { userId, courseId }, include: ['Teacher', 'Course', { model: Course, as: 'Course', include: ['GradeLevel'] }] }),
  create: (data: CourseTeacherCreationAttributes) => CourseTeacher.create(data),
  update: (userId: number, courseId: number, data: Partial<CourseTeacherCreationAttributes>) => CourseTeacher.update(data, { where: { userId, courseId }, returning: true }),
  delete: (userId: number, courseId: number) => CourseTeacher.destroy({ where: { userId, courseId } }),
  findByTeacher: (teacherId: number) => CourseTeacher.findAll({ where: { userId: teacherId }, include: ['Course', { model: Course, as: 'Course', include: ['GradeLevel'] }] }),
};