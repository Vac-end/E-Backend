"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseController = void 0;
const course_service_1 = require("../services/course.service");
const helpers_1 = require("../utils/helpers");
exports.courseController = {
    getAll: async (req, res) => {
        try {
            const courses = await course_service_1.courseService.getAll();
            res.status(200).json(courses);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Courses');
            res.status(500).json({ message: 'Failed to fetch courses' });
        }
    },
    getById: async (req, res) => {
        try {
            const course = await course_service_1.courseService.getById(Number(req.params.id));
            if (!course)
                return res.status(404).json({ message: 'Course not found' });
            res.status(200).json(course);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Course by ID');
            res.status(500).json({ message: 'Failed to fetch course' });
        }
    },
    create: async (req, res) => {
        try {
            const course = await course_service_1.courseService.create(req.body);
            res.status(201).json(course);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Course');
            res.status(400).json({ message: 'Failed to create course' });
        }
    },
    update: async (req, res) => {
        try {
            const course = await course_service_1.courseService.update(Number(req.params.id), req.body);
            if (!course)
                return res.status(404).json({ message: 'Course not found' });
            res.status(200).json(course);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Course');
            res.status(400).json({ message: 'Failed to update course' });
        }
    },
    delete: async (req, res) => {
        try {
            await course_service_1.courseService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Course');
            res.status(500).json({ message: 'Failed to delete course' });
        }
    },
    getByTeacher: async (req, res) => {
        try {
            const courses = await course_service_1.courseService.getByTeacher(Number(req.params.teacherId));
            res.status(200).json(courses);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Courses by Teacher');
            res.status(500).json({ message: 'Failed to fetch courses by teacher' });
        }
    },
};
//# sourceMappingURL=course.controller.js.map