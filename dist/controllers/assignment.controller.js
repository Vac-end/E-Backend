"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignmentController = void 0;
const assignment_service_1 = require("../services/assignment.service");
const helpers_1 = require("../utils/helpers");
exports.assignmentController = {
    getAll: async (req, res) => {
        try {
            const assignments = await assignment_service_1.assignmentService.getAll();
            res.status(200).json(assignments);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Assignments');
            res.status(500).json({ message: 'Failed to fetch assignments' });
        }
    },
    getById: async (req, res) => {
        try {
            const assignment = await assignment_service_1.assignmentService.getById(Number(req.params.id));
            if (!assignment)
                return res.status(404).json({ message: 'Assignment not found' });
            res.status(200).json(assignment);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Assignment by ID');
            res.status(500).json({ message: 'Failed to fetch assignment' });
        }
    },
    create: async (req, res) => {
        try {
            const assignment = await assignment_service_1.assignmentService.create(req.body);
            res.status(201).json(assignment);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Assignment');
            res.status(400).json({ message: 'Failed to create assignment' });
        }
    },
    update: async (req, res) => {
        try {
            const assignment = await assignment_service_1.assignmentService.update(Number(req.params.id), req.body);
            if (!assignment)
                return res.status(404).json({ message: 'Assignment not found' });
            res.status(200).json(assignment);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Assignment');
            res.status(400).json({ message: 'Failed to update assignment' });
        }
    },
    delete: async (req, res) => {
        try {
            await assignment_service_1.assignmentService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Assignment');
            res.status(500).json({ message: 'Failed to delete assignment' });
        }
    },
    getByCourse: async (req, res) => {
        try {
            const assignments = await assignment_service_1.assignmentService.getByCourse(Number(req.params.courseId));
            res.status(200).json(assignments);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Assignments by Course');
            res.status(500).json({ message: 'Failed to fetch assignments by course' });
        }
    },
};
//# sourceMappingURL=assignment.controller.js.map