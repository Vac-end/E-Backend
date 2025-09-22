import { Router } from 'express';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';
import courseRoutes from './course.routes';
import moduleRoutes from './module.routes';
import lessonRoutes from './lesson.routes';
import evaluationRoutes from './evaluation.routes';
import progressRoutes from './progress.routes';
import activityRoutes from './activity.routes';
import assignmentRoutes from './assignment.routes';
import submissionRoutes from './submission.routes';
import scheduleRoutes from './schedule.routes';
import attendanceRoutes from './attendance.routes';
import gradeRoutes from './grade.routes';
import groupRoutes from './group.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/modules', moduleRoutes);
router.use('/lessons', lessonRoutes);
router.use('/evaluations', evaluationRoutes);
router.use('/progress', progressRoutes);
router.use('/activities', activityRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/submissions', submissionRoutes);
router.use('/schedules', scheduleRoutes);
router.use('/attendances', attendanceRoutes);
router.use('/grades', gradeRoutes);
router.use('/groups', groupRoutes);

export default router;