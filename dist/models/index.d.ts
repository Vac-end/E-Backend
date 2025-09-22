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
export { sequelize, User, Course, Module, Lesson, Evaluation, Progress, Activity, RefreshToken, Assignment, Submission, Schedule, Attendance, Grade, Group };
declare module 'sequelize' {
    interface Model {
        addEnrolledUsers(users: User[]): Promise<void>;
        addEnrolledCourses(courses: Course[]): Promise<void>;
    }
}
//# sourceMappingURL=index.d.ts.map