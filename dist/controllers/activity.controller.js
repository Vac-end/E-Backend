"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityController = void 0;
const activity_service_1 = require("../services/activity.service");
const helpers_1 = require("../utils/helpers");
exports.activityController = {
    getAll: async (req, res) => {
        try {
            const activities = await activity_service_1.activityService.getAll();
            res.status(200).json(activities);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Activities');
            res.status(500).json({ message: 'Failed to fetch activities' });
        }
    },
    getById: async (req, res) => {
        try {
            const activity = await activity_service_1.activityService.getById(Number(req.params.id));
            if (!activity)
                return res.status(404).json({ message: 'Activity not found' });
            res.status(200).json(activity);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Activity by ID');
            res.status(500).json({ message: 'Failed to fetch activity' });
        }
    },
    create: async (req, res) => {
        try {
            const activity = await activity_service_1.activityService.create(req.body);
            res.status(201).json(activity);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Activity');
            res.status(400).json({ message: 'Failed to create activity' });
        }
    },
    delete: async (req, res) => {
        try {
            await activity_service_1.activityService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Activity');
            res.status(500).json({ message: 'Failed to delete activity' });
        }
    },
    getByUser: async (req, res) => {
        try {
            const activities = await activity_service_1.activityService.getByUser(Number(req.params.userId));
            res.status(200).json(activities);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Activities by User');
            res.status(500).json({ message: 'Failed to fetch activities by user' });
        }
    },
};
//# sourceMappingURL=activity.controller.js.map