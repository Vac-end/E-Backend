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
import { GradeLevel } from './models/gradelevel.model';
import bcrypt from 'bcrypt';
import { logger } from './utils/logger';
import { CourseTeacher } from './models/courseteacher.model';

async function seed() {
  await sequelize.sync({ force: true });

  const hashedPassword = await bcrypt.hash('password123', 10);

  let gradeLevels: GradeLevel[] = await GradeLevel.bulkCreate([
    { level: '1ro', category: 'Inicial' },
    { level: '2do', category: 'Inicial' },
    { level: '1ro', category: 'Primaria' },
    { level: '2do', category: 'Primaria' },
    { level: '1ro', category: 'Secundaria' },
    { level: '2do', category: 'Secundaria' },
    { level: '3ro', category: 'Primaria' },
  ], { returning: true });
  if (!gradeLevels || gradeLevels.length < 7) throw new Error('Failed to create grade levels');
  gradeLevels = gradeLevels as GradeLevel[];

  const users = await User.bulkCreate([
    { username: 'admin1', email: 'admin@example.com', password: hashedPassword, role: 'administrador', gradeId: null! },
    { username: 'docente1', email: 'docente@example.com', password: hashedPassword, role: 'docente', gradeId: null! },
    { username: 'estudiante1', email: 'estudiante1@example.com', password: hashedPassword, role: 'niño', gradeId: gradeLevels[2]!.id },
    { username: 'estudiante2', email: 'estudiante2@example.com', password: hashedPassword, role: 'niño', gradeId: gradeLevels[3]!.id },
  ]);
  if (!users || users.length < 4) throw new Error('Failed to create users');
  if (!users[0] || !users[1] || !users[2] || !users[3]) throw new Error('Invalid user data');

  const courses = await Course.bulkCreate([
    {
      title: 'Matemáticas Básicas 1ro',
      description: 'Curso de matemáticas para 1ro de Primaria',
      createdBy: users[1].id,
      gradeLevelId: gradeLevels[2]!.id,
      isGroupEnabled: true,
      maxGroupSize: 3,
    },
    {
      title: 'Ciencias Naturales',
      description: 'Curso de ciencias para secundaria',
      createdBy: users[1].id,
      gradeLevelId: gradeLevels[4]!.id,
      isGroupEnabled: false,
      maxGroupSize: null!,
    },
    {
      title: 'Matemáticas Básicas 2do',
      description: 'Curso de matemáticas para 2do de Primaria',
      createdBy: users[1].id,
      gradeLevelId: gradeLevels[3]!.id,
      isGroupEnabled: true,
      maxGroupSize: 3,
    },
  ]);
  if (!courses || courses.length < 3) throw new Error('Failed to create courses');
  if (!courses[0] || !courses[1] || !courses[2]) throw new Error('Invalid course data');

  await users[1].addTaughtCourses(courses[0]);

  await courses[0].addEnrolledUsers([users[2]]);
  await courses[1].addEnrolledUsers([users[2]]);
  await courses[2].addEnrolledUsers([users[3]]);

  const groups = await Group.bulkCreate([
    {
      courseId: courses[0].id,
      name: 'Grupo Matemáticas 1ro',
      size: 0,
      createdBy: users[1].id,
    },
    {
      courseId: courses[1].id,
      name: 'Grupo Ciencias Secundaria',
      size: 0,
      createdBy: users[1].id,
    },
    {
      courseId: courses[2].id,
      name: 'Grupo Matemáticas 2do',
      size: 0,
      createdBy: users[1].id,
    },
  ]);
  if (!groups || groups.length < 3) throw new Error('Failed to create groups');
  if (!groups[0] || !groups[1] || !groups[2]) throw new Error('Invalid group data');

  await groups[0].addMembers(users[2]);
  groups[0].size += 1;
  await groups[0].save();

  await groups[2].addMembers(users[3]);
  groups[2].size += 1;
  await groups[2].save();

  const modules = await Module.bulkCreate([
    { title: 'Módulo 1: Sumas 1ro', courseId: courses[0].id },
    { title: 'Módulo 1: Biología', courseId: courses[1].id },
    { title: 'Módulo 1: Sumas 2do', courseId: courses[2].id },
  ]);
  if (!modules || modules.length < 3) throw new Error('Failed to create modules');
  if (!modules[0] || !modules[1] || !modules[2]) throw new Error('Invalid module data');

  const lessons = await Lesson.bulkCreate([
    { title: 'Lección 1: Sumas simples 1ro', content: 'Contenido de sumas 1ro', moduleId: modules[0].id },
    { title: 'Lección 1: Células', content: 'Contenido de biología', moduleId: modules[1].id },
    { title: 'Lección 1: Sumas simples 2do', content: 'Contenido de sumas 2do', moduleId: modules[2].id },
  ]);
  if (!lessons || lessons.length < 3) throw new Error('Failed to create lessons');
  if (!lessons[0] || !lessons[1] || !lessons[2]) throw new Error('Invalid lesson data');

  const evaluations = await Evaluation.bulkCreate([
    { title: 'Evaluación Sumas 1ro', type: 'Quiz', lessonId: lessons[0].id },
    { title: 'Evaluación Células', type: 'Examen', lessonId: lessons[1].id },
    { title: 'Evaluación Sumas 2do', type: 'Quiz', lessonId: lessons[2].id },
  ]);
  if (!evaluations || evaluations.length < 3) throw new Error('Failed to create evaluations');
  if (!evaluations[0] || !evaluations[1] || !evaluations[2]) throw new Error('Invalid evaluation data');

  const progress = await Progress.bulkCreate([
    { userId: users[2].id, lessonId: lessons[0].id, completed: true, score: 90 },
    { userId: users[3].id, lessonId: lessons[2].id, completed: false, score: 0 },
  ]);
  if (!progress || progress.length < 2) throw new Error('Failed to create progress');
  if (!progress[0] || !progress[1]) throw new Error('Invalid progress data');

  const activities = await Activity.bulkCreate([
    { userId: users[0].id, action: 'Login', details: 'Admin logged in' },
    { userId: users[2].id, action: 'Completed Lesson', details: 'Estudiante1 completed sumas 1ro' },
  ]);
  if (!activities || activities.length < 2) throw new Error('Failed to create activities');
  if (!activities[0] || !activities[1]) throw new Error('Invalid activity data');

  const assignments = await Assignment.bulkCreate([
    { title: 'Tarea Sumas 1ro', description: 'Realizar sumas 1ro', dueDate: new Date(), courseId: courses[0].id },
    { title: 'Tarea Sumas 2do', description: 'Realizar sumas 2do', dueDate: new Date(), courseId: courses[2].id },
  ]);
  if (!assignments || assignments.length < 2) throw new Error('Failed to create assignments');
  if (!assignments[0] || !assignments[1]) throw new Error('Invalid assignment data');

  const submissions = await Submission.bulkCreate([
    { filePath: '/uploads/suma1ro.pdf', status: 'entregado', assignmentId: assignments[0].id, studentId: users[2].id },
    { filePath: '/uploads/suma2do.pdf', status: 'pendiente', assignmentId: assignments[1].id, studentId: users[3].id },
  ]);
  if (!submissions || submissions.length < 2) throw new Error('Failed to create submissions');
  if (!submissions[0] || !submissions[1]) throw new Error('Invalid submission data');

  const schedules = await Schedule.bulkCreate([
    { day: 'Lunes', time: '09:00', courseId: courses[0].id },
    { day: 'Lunes', time: '10:00', courseId: courses[2].id },
  ]);
  if (!schedules || schedules.length < 2) throw new Error('Failed to create schedules');
  if (!schedules[0] || !schedules[1]) throw new Error('Invalid schedule data');

  const attendances = await Attendance.bulkCreate([
    { date: new Date(), present: true, studentId: users[2].id, scheduleId: schedules[0].id },
    { date: new Date(), present: false, studentId: users[3].id, scheduleId: schedules[1].id },
  ]);
  if (!attendances || attendances.length < 2) throw new Error('Failed to create attendances');
  if (!attendances[0] || !attendances[1]) throw new Error('Invalid attendance data');

  const grades = await Grade.bulkCreate([
    { score: 95, comments: 'Excelente', submissionId: submissions[0].id, teacherId: users[1].id },
    { score: 0, comments: 'Pendiente', submissionId: submissions[1].id, teacherId: users[1].id },
  ]);
  if (!grades || grades.length < 2) throw new Error('Failed to create grades');
  if (!grades[0] || !grades[1]) throw new Error('Invalid grade data');

  logger.info('Database seeded');
}

seed().catch(err => logger.error('Seeding failed', err));