"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeController = void 0;
const grade_service_1 = require("../services/grade.service");
const helpers_1 = require("../utils/helpers");
exports.gradeController = {
    getAll: async (req, res) => {
        try {
            const grades = await grade_service_1.gradeService.getAll();
            res.status(200).json(grades);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Grades');
            res.status(500).json({ message: 'Failed to fetch grades' });
        }
    },
    getById: async (req, res) => {
        try {
            const grade = await grade_service_1.gradeService.getById(Number(req.params.id));
            if (!grade)
                return res.status(404).json({ message: 'Grade not found' });
            res.status(200).json(grade);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Grade by ID');
            res.status(500).json({ message: 'Failed to fetch grade' });
        }
    },
    create: async (req, res) => {
        try {
            const grade = await grade_service_1.gradeService.create(req.body);
            res.status(201).json(grade);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Grade');
            res.status(400).json({ message: 'Failed to create grade' });
        }
    },
    update: async (req, res) => {
        try {
            const grade = await grade_service_1.gradeService.update(Number(req.params.id), req.body);
            if (!grade)
                return res.status(404).json({ message: 'Grade not found' });
            res.status(200).json(grade);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Grade');
            res.status(400).json({ message: 'Failed to update grade' });
        }
    },
    delete: async (req, res) => {
        try {
            await grade_service_1.gradeService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Grade');
            res.status(500).json({ message: 'Failed to delete grade' });
        }
    },
    getBySubmission: async (req, res) => {
        try {
            const grade = await grade_service_1.gradeService.getBySubmission(Number(req.params.submissionId));
            if (!grade)
                return res.status(404).json({ message: 'Grade not found' });
            res.status(200).json(grade);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Grade by Submission');
            res.status(500).json({ message: 'Failed to fetch grade by submission' });
        }
    },
    getByTeacher: async (req, res) => {
        try {
            const grades = await grade_service_1.gradeService.getByTeacher(Number(req.params.teacherId));
            res.status(200).json(grades);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Grades by Teacher');
            res.status(500).json({ message: 'Failed to fetch grades by teacher' });
        }
    },
};
//# sourceMappingURL=grade.controller.js.map