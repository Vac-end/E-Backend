"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleController = void 0;
const schedule_service_1 = require("../services/schedule.service");
const helpers_1 = require("../utils/helpers");
exports.scheduleController = {
    getAll: async (req, res) => {
        try {
            const schedules = await schedule_service_1.scheduleService.getAll();
            res.status(200).json(schedules);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Schedules');
            res.status(500).json({ message: 'Failed to fetch schedules' });
        }
    },
    getById: async (req, res) => {
        try {
            const schedule = await schedule_service_1.scheduleService.getById(Number(req.params.id));
            if (!schedule)
                return res.status(404).json({ message: 'Schedule not found' });
            res.status(200).json(schedule);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Schedule by ID');
            res.status(500).json({ message: 'Failed to fetch schedule' });
        }
    },
    create: async (req, res) => {
        try {
            const schedule = await schedule_service_1.scheduleService.create(req.body);
            res.status(201).json(schedule);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Schedule');
            res.status(400).json({ message: 'Failed to create schedule' });
        }
    },
    update: async (req, res) => {
        try {
            const schedule = await schedule_service_1.scheduleService.update(Number(req.params.id), req.body);
            if (!schedule)
                return res.status(404).json({ message: 'Schedule not found' });
            res.status(200).json(schedule);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Schedule');
            res.status(400).json({ message: 'Failed to update schedule' });
        }
    },
    delete: async (req, res) => {
        try {
            await schedule_service_1.scheduleService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Schedule');
            res.status(500).json({ message: 'Failed to delete schedule' });
        }
    },
    getByCourse: async (req, res) => {
        try {
            const schedules = await schedule_service_1.scheduleService.getByCourse(Number(req.params.courseId));
            res.status(200).json(schedules);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Schedules by Course');
            res.status(500).json({ message: 'Failed to fetch schedules by course' });
        }
    },
};
//# sourceMappingURL=schedule.controller.js.map