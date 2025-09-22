"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionController = void 0;
const submission_service_1 = require("../services/submission.service");
const helpers_1 = require("../utils/helpers");
exports.submissionController = {
    getAll: async (req, res) => {
        try {
            const submissions = await submission_service_1.submissionService.getAll();
            res.status(200).json(submissions);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Submissions');
            res.status(500).json({ message: 'Failed to fetch submissions' });
        }
    },
    getById: async (req, res) => {
        try {
            const submission = await submission_service_1.submissionService.getById(Number(req.params.id));
            if (!submission)
                return res.status(404).json({ message: 'Submission not found' });
            res.status(200).json(submission);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Submission by ID');
            res.status(500).json({ message: 'Failed to fetch submission' });
        }
    },
    create: async (req, res) => {
        try {
            const submission = await submission_service_1.submissionService.create(req.body);
            res.status(201).json(submission);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Submission');
            res.status(400).json({ message: 'Failed to create submission' });
        }
    },
    update: async (req, res) => {
        try {
            const submission = await submission_service_1.submissionService.update(Number(req.params.id), req.body);
            if (!submission)
                return res.status(404).json({ message: 'Submission not found' });
            res.status(200).json(submission);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Submission');
            res.status(400).json({ message: 'Failed to update submission' });
        }
    },
    delete: async (req, res) => {
        try {
            await submission_service_1.submissionService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Submission');
            res.status(500).json({ message: 'Failed to delete submission' });
        }
    },
    getByAssignment: async (req, res) => {
        try {
            const submissions = await submission_service_1.submissionService.getByAssignment(Number(req.params.assignmentId));
            res.status(200).json(submissions);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Submissions by Assignment');
            res.status(500).json({ message: 'Failed to fetch submissions by assignment' });
        }
    },
    getByStudent: async (req, res) => {
        try {
            const submissions = await submission_service_1.submissionService.getByStudent(Number(req.params.studentId));
            res.status(200).json(submissions);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Submissions by Student');
            res.status(500).json({ message: 'Failed to fetch submissions by student' });
        }
    },
};
//# sourceMappingURL=submission.controller.js.map