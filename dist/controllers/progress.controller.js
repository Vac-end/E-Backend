"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressController = void 0;
const progress_service_1 = require("../services/progress.service");
const helpers_1 = require("../utils/helpers");
exports.progressController = {
    getAll: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.getAll();
            res.status(200).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Progress');
            res.status(500).json({ message: 'Failed to fetch progress' });
        }
    },
    getById: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.getById(Number(req.params.id));
            if (!progress)
                return res.status(404).json({ message: 'Progress not found' });
            res.status(200).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Progress by ID');
            res.status(500).json({ message: 'Failed to fetch progress' });
        }
    },
    create: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.create(req.body);
            res.status(201).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Progress');
            res.status(400).json({ message: 'Failed to create progress' });
        }
    },
    update: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.update(Number(req.params.id), req.body);
            if (!progress)
                return res.status(404).json({ message: 'Progress not found' });
            res.status(200).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Progress');
            res.status(400).json({ message: 'Failed to update progress' });
        }
    },
    delete: async (req, res) => {
        try {
            await progress_service_1.progressService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Progress');
            res.status(500).json({ message: 'Failed to delete progress' });
        }
    },
    getByUser: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.getByUser(Number(req.params.userId));
            res.status(200).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Progress by User');
            res.status(500).json({ message: 'Failed to fetch progress by user' });
        }
    },
    getByLesson: async (req, res) => {
        try {
            const progress = await progress_service_1.progressService.getByLesson(Number(req.params.lessonId));
            res.status(200).json(progress);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Progress by Lesson');
            res.status(500).json({ message: 'Failed to fetch progress by lesson' });
        }
    },
};
//# sourceMappingURL=progress.controller.js.map