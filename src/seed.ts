import { sequelize } from './models/index';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Module } from './models/module.model';
import { Lesson } from './models/lesson.model';
import { Evaluation } from './models/evaluation.model';
import { Progress } from './models/progress.model';
import { Activity } from './models/activity.model';
import { Assignment } from './models/assignment.model';
import { Submission } from './models/submission.model';
import { Schedule } from './models/schedule.model';
import { Attendance } from './models/attendance.model';
import { Grade } from './models/grade.model';
import { Group } from './models/group.model';
import bcrypt from 'bcrypt';
import { logger } from './utils/logger';

async function seed() {
  await sequelize.sync({ force: true });

  const hashedPassword = await bcrypt.hash('password123', 10);

  const users = await User.bulkCreate([
    { username: 'admin1', email: 'admin@example.com', password: hashedPassword, role: 'administrador' },
    { username: 'docente1', email: 'docente@example.com', password: hashedPassword, role: 'docente' },
    { username: 'estudiante1', email: 'estudiante1@example.com', password: hashedPassword, role: 'niño' },
    { username: 'estudiante2', email: 'estudiante2@example.com', password: hashedPassword, role: 'niño' },
  ]);
  if (!users || users.length < 4) throw new Error('Failed to create users');
  if (!users[0] || !users[1] || !users[2] || !users[3]) throw new Error('Invalid user data');

  const groups = await Group.bulkCreate([
    { name: 'Grupo Matemáticas Primaria', level: 'Primaria' },
    { name: 'Grupo Ciencias Secundaria', level: 'Secundaria' },
  ]);
  if (!groups || groups.length < 2) throw new Error('Failed to create groups');
  if (!groups[0] || !groups[1]) throw new Error('Invalid group data');

  const courses = await Course.bulkCreate([
    { title: 'Matemáticas Básicas', description: 'Curso de matemáticas para primaria', createdBy: users[1]!.id },
    { title: 'Ciencias Naturales', description: 'Curso de ciencias para secundaria', createdBy: users[1]!.id },
  ]);
  if (!courses || courses.length < 2) throw new Error('Failed to create courses');
  if (!courses[0] || !courses[1]) throw new Error('Invalid course data');

  await courses[0]!.addEnrolledUsers([users[2]!, users[3]!]);
  await courses[1]!.addEnrolledUsers([users[2]!]);

  const modules = await Module.bulkCreate([
    { title: 'Módulo 1: Sumas', courseId: courses[0]!.id },
    { title: 'Módulo 1: Biología', courseId: courses[1]!.id },
  ]);
  if (!modules || modules.length < 2) throw new Error('Failed to create modules');
  if (!modules[0] || !modules[1]) throw new Error('Invalid module data');

  const lessons = await Lesson.bulkCreate([
    { title: 'Lección 1: Sumas simples', content: 'Contenido de sumas', moduleId: modules[0]!.id },
    { title: 'Lección 1: Células', content: 'Contenido de biología', moduleId: modules[1]!.id },
  ]);
  if (!lessons || lessons.length < 2) throw new Error('Failed to create lessons');
  if (!lessons[0] || !lessons[1]) throw new Error('Invalid lesson data');

  const evaluations = await Evaluation.bulkCreate([
    { title: 'Evaluación Sumas', type: 'Quiz', lessonId: lessons[0]!.id },
    { title: 'Evaluación Células', type: 'Examen', lessonId: lessons[1]!.id },
  ]);
  if (!evaluations || evaluations.length < 2) throw new Error('Failed to create evaluations');
  if (!evaluations[0] || !evaluations[1]) throw new Error('Invalid evaluation data');

  const progress = await Progress.bulkCreate([
    { userId: users[2]!.id, lessonId: lessons[0]!.id, completed: true, score: 90 },
    { userId: users[3]!.id, lessonId: lessons[0]!.id, completed: false, score: 0 },
  ]);
  if (!progress || progress.length < 2) throw new Error('Failed to create progress');
  if (!progress[0] || !progress[1]) throw new Error('Invalid progress data');

  const activities = await Activity.bulkCreate([
    { userId: users[0]!.id, action: 'Login', details: 'Admin logged in' },
    { userId: users[2]!.id, action: 'Completed Lesson', details: 'Estudiante completed sumas' },
  ]);
  if (!activities || activities.length < 2) throw new Error('Failed to create activities');
  if (!activities[0] || !activities[1]) throw new Error('Invalid activity data');

  const assignments = await Assignment.bulkCreate([
    { title: 'Tarea Sumas', description: 'Realizar sumas', dueDate: new Date(), courseId: courses[0]!.id },
  ]);
  if (!assignments || assignments.length < 1) throw new Error('Failed to create assignments');
  if (!assignments[0]) throw new Error('Invalid assignment data');

  const submissions = await Submission.bulkCreate([
    { filePath: '/uploads/suma.pdf', status: 'entregado', assignmentId: assignments[0]!.id, studentId: users[2]!.id },
  ]);
  if (!submissions || submissions.length < 1) throw new Error('Failed to create submissions');
  if (!submissions[0]) throw new Error('Invalid submission data');

  const schedules = await Schedule.bulkCreate([
    { day: 'Lunes', time: '09:00', courseId: courses[0]!.id },
  ]);
  if (!schedules || schedules.length < 1) throw new Error('Failed to create schedules');
  if (!schedules[0]) throw new Error('Invalid schedule data');

  const attendances = await Attendance.bulkCreate([
    { date: new Date(), present: true, studentId: users[2]!.id, scheduleId: schedules[0]!.id },
  ]);
  if (!attendances || attendances.length < 1) throw new Error('Failed to create attendances');
  if (!attendances[0]) throw new Error('Invalid attendance data');

  const grades = await Grade.bulkCreate([
    { score: 95, comments: 'Excelente', submissionId: submissions[0]!.id, teacherId: users[1]!.id },
  ]);
  if (!grades || grades.length < 1) throw new Error('Failed to create grades');
  if (!grades[0]) throw new Error('Invalid grade data');

  logger.info('Database seeded');
}

seed().catch(err => logger.error('Seeding failed', err));