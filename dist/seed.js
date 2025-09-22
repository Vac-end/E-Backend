"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./models/index");
const user_model_1 = require("./models/user.model");
const course_model_1 = require("./models/course.model");
const module_model_1 = require("./models/module.model");
const lesson_model_1 = require("./models/lesson.model");
const evaluation_model_1 = require("./models/evaluation.model");
const progress_model_1 = require("./models/progress.model");
const activity_model_1 = require("./models/activity.model");
const assignment_model_1 = require("./models/assignment.model");
const submission_model_1 = require("./models/submission.model");
const schedule_model_1 = require("./models/schedule.model");
const attendance_model_1 = require("./models/attendance.model");
const grade_model_1 = require("./models/grade.model");
const group_model_1 = require("./models/group.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const logger_1 = require("./utils/logger");
async function seed() {
    await index_1.sequelize.sync({ force: true });
    const hashedPassword = await bcrypt_1.default.hash('password123', 10);
    // Crear usuarios
    const users = await user_model_1.User.bulkCreate([
        { username: 'admin1', email: 'admin@example.com', password: hashedPassword, role: 'administrador' },
        { username: 'docente1', email: 'docente@example.com', password: hashedPassword, role: 'docente' },
        { username: 'estudiante1', email: 'estudiante1@example.com', password: hashedPassword, role: 'niño' },
        { username: 'estudiante2', email: 'estudiante2@example.com', password: hashedPassword, role: 'niño' },
    ]);
    if (!users || users.length < 4)
        throw new Error('Failed to create users');
    // Verificar índices antes de usar
    if (!users[0] || !users[1] || !users[2] || !users[3])
        throw new Error('Invalid user data');
    // Crear grupos
    const groups = await group_model_1.Group.bulkCreate([
        { name: 'Grupo Matemáticas Primaria', level: 'Primaria' },
        { name: 'Grupo Ciencias Secundaria', level: 'Secundaria' },
    ]);
    if (!groups || groups.length < 2)
        throw new Error('Failed to create groups');
    if (!groups[0] || !groups[1])
        throw new Error('Invalid group data');
    // Crear cursos
    const courses = await course_model_1.Course.bulkCreate([
        { title: 'Matemáticas Básicas', description: 'Curso de matemáticas para primaria', createdBy: users[1].id },
        { title: 'Ciencias Naturales', description: 'Curso de ciencias para secundaria', createdBy: users[1].id },
    ]);
    if (!courses || courses.length < 2)
        throw new Error('Failed to create courses');
    if (!courses[0] || !courses[1])
        throw new Error('Invalid course data');
    await courses[0].addEnrolledUsers([users[2], users[3]]);
    await courses[1].addEnrolledUsers([users[2]]);
    // Crear módulos
    const modules = await module_model_1.Module.bulkCreate([
        { title: 'Módulo 1: Sumas', courseId: courses[0].id },
        { title: 'Módulo 1: Biología', courseId: courses[1].id },
    ]);
    if (!modules || modules.length < 2)
        throw new Error('Failed to create modules');
    if (!modules[0] || !modules[1])
        throw new Error('Invalid module data');
    // Crear lecciones
    const lessons = await lesson_model_1.Lesson.bulkCreate([
        { title: 'Lección 1: Sumas simples', content: 'Contenido de sumas', moduleId: modules[0].id },
        { title: 'Lección 1: Células', content: 'Contenido de biología', moduleId: modules[1].id },
    ]);
    if (!lessons || lessons.length < 2)
        throw new Error('Failed to create lessons');
    if (!lessons[0] || !lessons[1])
        throw new Error('Invalid lesson data');
    // Crear evaluaciones
    const evaluations = await evaluation_model_1.Evaluation.bulkCreate([
        { title: 'Evaluación Sumas', type: 'Quiz', lessonId: lessons[0].id },
        { title: 'Evaluación Células', type: 'Examen', lessonId: lessons[1].id },
    ]);
    if (!evaluations || evaluations.length < 2)
        throw new Error('Failed to create evaluations');
    if (!evaluations[0] || !evaluations[1])
        throw new Error('Invalid evaluation data');
    // Crear progreso
    const progress = await progress_model_1.Progress.bulkCreate([
        { userId: users[2].id, lessonId: lessons[0].id, completed: true, score: 90 },
        { userId: users[3].id, lessonId: lessons[0].id, completed: false, score: 0 },
    ]);
    if (!progress || progress.length < 2)
        throw new Error('Failed to create progress');
    if (!progress[0] || !progress[1])
        throw new Error('Invalid progress data');
    // Crear actividades
    const activities = await activity_model_1.Activity.bulkCreate([
        { userId: users[0].id, action: 'Login', details: 'Admin logged in' },
        { userId: users[2].id, action: 'Completed Lesson', details: 'Estudiante completed sumas' },
    ]);
    if (!activities || activities.length < 2)
        throw new Error('Failed to create activities');
    if (!activities[0] || !activities[1])
        throw new Error('Invalid activity data');
    // Crear asignaciones
    const assignments = await assignment_model_1.Assignment.bulkCreate([
        { title: 'Tarea Sumas', description: 'Realizar sumas', dueDate: new Date(), courseId: courses[0].id },
    ]);
    if (!assignments || assignments.length < 1)
        throw new Error('Failed to create assignments');
    if (!assignments[0])
        throw new Error('Invalid assignment data');
    // Crear submissions
    const submissions = await submission_model_1.Submission.bulkCreate([
        { filePath: '/uploads/suma.pdf', status: 'entregado', assignmentId: assignments[0].id, studentId: users[2].id },
    ]);
    if (!submissions || submissions.length < 1)
        throw new Error('Failed to create submissions');
    if (!submissions[0])
        throw new Error('Invalid submission data');
    // Crear schedules
    const schedules = await schedule_model_1.Schedule.bulkCreate([
        { day: 'Lunes', time: '09:00', courseId: courses[0].id },
    ]);
    if (!schedules || schedules.length < 1)
        throw new Error('Failed to create schedules');
    if (!schedules[0])
        throw new Error('Invalid schedule data');
    // Crear attendances
    const attendances = await attendance_model_1.Attendance.bulkCreate([
        { date: new Date(), present: true, studentId: users[2].id, scheduleId: schedules[0].id },
    ]);
    if (!attendances || attendances.length < 1)
        throw new Error('Failed to create attendances');
    if (!attendances[0])
        throw new Error('Invalid attendance data');
    // Crear grades
    const grades = await grade_model_1.Grade.bulkCreate([
        { score: 95, comments: 'Excelente', submissionId: submissions[0].id, teacherId: users[1].id },
    ]);
    if (!grades || grades.length < 1)
        throw new Error('Failed to create grades');
    if (!grades[0])
        throw new Error('Invalid grade data');
    logger_1.logger.info('Database seeded');
}
seed().catch(err => logger_1.logger.error('Seeding failed', err));
//# sourceMappingURL=seed.js.map