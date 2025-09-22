"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationController = void 0;
const evaluation_service_1 = require("../services/evaluation.service");
const helpers_1 = require("../utils/helpers");
exports.evaluationController = {
    getAll: async (req, res) => {
        try {
            const evaluations = await evaluation_service_1.evaluationService.getAll();
            res.status(200).json(evaluations);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Evaluations');
            res.status(500).json({ message: 'Failed to fetch evaluations' });
        }
    },
    getById: async (req, res) => {
        try {
            const evaluation = await evaluation_service_1.evaluationService.getById(Number(req.params.id));
            if (!evaluation)
                return res.status(404).json({ message: 'Evaluation not found' });
            res.status(200).json(evaluation);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Evaluation by ID');
            res.status(500).json({ message: 'Failed to fetch evaluation' });
        }
    },
    create: async (req, res) => {
        try {
            const evaluation = await evaluation_service_1.evaluationService.create(req.body);
            res.status(201).json(evaluation);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Evaluation');
            res.status(400).json({ message: 'Failed to create evaluation' });
        }
    },
    update: async (req, res) => {
        try {
            const evaluation = await evaluation_service_1.evaluationService.update(Number(req.params.id), req.body);
            if (!evaluation)
                return res.status(404).json({ message: 'Evaluation not found' });
            res.status(200).json(evaluation);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Evaluation');
            res.status(400).json({ message: 'Failed to update evaluation' });
        }
    },
    delete: async (req, res) => {
        try {
            await evaluation_service_1.evaluationService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Evaluation');
            res.status(500).json({ message: 'Failed to delete evaluation' });
        }
    },
    getByLesson: async (req, res) => {
        try {
            const evaluations = await evaluation_service_1.evaluationService.getByLesson(Number(req.params.lessonId));
            res.status(200).json(evaluations);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Evaluations by Lesson');
            res.status(500).json({ message: 'Failed to fetch evaluations by lesson' });
        }
    },
};
//# sourceMappingURL=evaluation.controller.js.map