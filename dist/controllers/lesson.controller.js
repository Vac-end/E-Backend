"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonController = void 0;
const lesson_service_1 = require("../services/lesson.service");
const helpers_1 = require("../utils/helpers");
exports.lessonController = {
    getAll: async (req, res) => {
        try {
            const lessons = await lesson_service_1.lessonService.getAll();
            res.status(200).json(lessons);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Lessons');
            res.status(500).json({ message: 'Failed to fetch lessons' });
        }
    },
    getById: async (req, res) => {
        try {
            const lesson = await lesson_service_1.lessonService.getById(Number(req.params.id));
            if (!lesson)
                return res.status(404).json({ message: 'Lesson not found' });
            res.status(200).json(lesson);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Lesson by ID');
            res.status(500).json({ message: 'Failed to fetch lesson' });
        }
    },
    create: async (req, res) => {
        try {
            const lesson = await lesson_service_1.lessonService.create(req.body);
            res.status(201).json(lesson);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Lesson');
            res.status(400).json({ message: 'Failed to create lesson' });
        }
    },
    update: async (req, res) => {
        try {
            const lesson = await lesson_service_1.lessonService.update(Number(req.params.id), req.body);
            if (!lesson)
                return res.status(404).json({ message: 'Lesson not found' });
            res.status(200).json(lesson);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Lesson');
            res.status(400).json({ message: 'Failed to update lesson' });
        }
    },
    delete: async (req, res) => {
        try {
            await lesson_service_1.lessonService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Lesson');
            res.status(500).json({ message: 'Failed to delete lesson' });
        }
    },
    getByModule: async (req, res) => {
        try {
            const lessons = await lesson_service_1.lessonService.getByModule(Number(req.params.moduleId));
            res.status(200).json(lessons);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Lessons by Module');
            res.status(500).json({ message: 'Failed to fetch lessons by module' });
        }
    },
};
//# sourceMappingURL=lesson.controller.js.map