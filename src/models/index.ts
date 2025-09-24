import { sequelize } from '../config/db.config';
import { User } from './user.model';
import { Course } from './course.model';
import { Module } from './module.model';
import { Lesson } from './lesson.model';
import { Evaluation } from './evaluation.model';
import { Progress } from './progress.model';
import { Activity } from './activity.model';
import { RefreshToken } from './refreshtoken.model';
import { Assignment } from './assignment.model';
import { Submission } from './submission.model';
import { Schedule } from './schedule.model';
import { Attendance } from './attendance.model';
import { Grade } from './grade.model';
import { Group } from './group.model';
import { GradeLevel } from './gradelevel.model';
import { CourseTeacher } from './courseteacher.model';

// Relaciones existentes
User.hasMany(Course, { foreignKey: 'createdBy', as: 'CreatedCourses' });
Course.belongsTo(User, { foreignKey: 'createdBy', as: 'Creator' });

Course.hasMany(Module, { foreignKey: 'courseId', as: 'Modules' });
Module.belongsTo(Course, { foreignKey: 'courseId', as: 'Course' });

Module.hasMany(Lesson, { foreignKey: 'moduleId', as: 'Lessons' });
Lesson.belongsTo(Module, { foreignKey: 'moduleId', as: 'Module' });

Lesson.hasMany(Evaluation, { foreignKey: 'lessonId', as: 'Evaluations' });
Evaluation.belongsTo(Lesson, { foreignKey: 'lessonId', as: 'Lesson' });

User.hasMany(Progress, { foreignKey: 'userId', as: 'Progresses' });
Progress.belongsTo(User, { foreignKey: 'userId', as: 'User' });
Lesson.hasMany(Progress, { foreignKey: 'lessonId', as: 'Progresses' });
Progress.belongsTo(Lesson, { foreignKey: 'lessonId', as: 'Lesson' });

User.hasMany(Activity, { foreignKey: 'userId', as: 'Activities' });
Activity.belongsTo(User, { foreignKey: 'userId', as: 'User' });

User.hasMany(RefreshToken, { foreignKey: 'userId', as: 'RefreshTokens' });
RefreshToken.belongsTo(User, { foreignKey: 'userId', as: 'User' });

Course.hasMany(Assignment, { foreignKey: 'courseId', as: 'Assignments' });
Assignment.belongsTo(Course, { foreignKey: 'courseId', as: 'Course' });

Assignment.hasMany(Submission, { foreignKey: 'assignmentId', as: 'Submissions' });
Submission.belongsTo(Assignment, { foreignKey: 'assignmentId', as: 'Assignment' });
User.hasMany(Submission, { foreignKey: 'studentId', as: 'Submissions' });
Submission.belongsTo(User, { foreignKey: 'studentId', as: 'Student' });

Course.hasMany(Schedule, { foreignKey: 'courseId', as: 'Schedules' });
Schedule.belongsTo(Course, { foreignKey: 'courseId', as: 'Course' });

Schedule.hasMany(Attendance, { foreignKey: 'scheduleId', as: 'Attendances' });
Attendance.belongsTo(Schedule, { foreignKey: 'scheduleId', as: 'Schedule' });
User.hasMany(Attendance, { foreignKey: 'studentId', as: 'Attendances' });
Attendance.belongsTo(User, { foreignKey: 'studentId', as: 'Student' });

Submission.hasOne(Grade, { foreignKey: 'submissionId', as: 'Grade' });
Grade.belongsTo(Submission, { foreignKey: 'submissionId', as: 'Submission' });
User.hasMany(Grade, { foreignKey: 'teacherId', as: 'GradesGiven' });
Grade.belongsTo(User, { foreignKey: 'teacherId', as: 'Teacher' });

Group.belongsToMany(User, { through: 'GroupMembers', foreignKey: 'groupId', otherKey: 'userId', as: 'Members' });
User.belongsToMany(Group, { through: 'GroupMembers', foreignKey: 'userId', otherKey: 'groupId', as: 'Groups' });

Course.belongsToMany(User, { through: 'CourseUsers', foreignKey: 'courseId', otherKey: 'userId', as: 'EnrolledUsers' });
User.belongsToMany(Course, { through: 'CourseUsers', foreignKey: 'userId', otherKey: 'courseId', as: 'EnrolledCourses' });

CourseTeacher.belongsTo(User, { foreignKey: 'userId', as: 'Teacher' });
CourseTeacher.belongsTo(Course, { foreignKey: 'courseId', as: 'Course' });

User.belongsTo(GradeLevel, { foreignKey: 'gradeId', as: 'GradeLevel' });

User.belongsToMany(Course, { through: 'CourseTeacher', as: 'TaughtCourses', foreignKey: 'userId' });
Course.belongsToMany(User, { through: 'CourseTeacher', as: 'Teachers', foreignKey: 'courseId' });

Course.belongsTo(GradeLevel, { foreignKey: 'gradeLevelId', as: 'GradeLevel' });
GradeLevel.hasMany(Course, { foreignKey: 'gradeLevelId', as: 'Courses' });

Group.belongsTo(Course, { foreignKey: 'courseId', as: 'Course' });
Group.belongsTo(User, { foreignKey: 'createdBy', as: 'Creator' });

// Declaración de módulo para extender los tipos de Sequelize
declare module 'sequelize' {
  interface Model {
    addEnrolledUsers(users: User[]): Promise<void>;
    addEnrolledCourses(courses: Course[]): Promise<void>;
    addMembers(users: User | User[] | number | number[]): Promise<void>;
    removeMembers(users: User | User[] | number | number[]): Promise<void>;
    addTaughtCourses(courses: Course | Course[] | number | number[]): Promise<void>;
    removeTaughtCourses(courses: Course | Course[] | number | number[]): Promise<void>;
  }
}

export { sequelize, User, Course, Module, Lesson, Evaluation, Progress, Activity, RefreshToken, Assignment, Submission, Schedule, Attendance, Grade, Group, GradeLevel };