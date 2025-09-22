"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupController = void 0;
const group_service_1 = require("../services/group.service");
const helpers_1 = require("../utils/helpers");
exports.groupController = {
    getAll: async (req, res) => {
        try {
            const groups = await group_service_1.groupService.getAll();
            res.status(200).json(groups);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Groups');
            res.status(500).json({ message: 'Failed to fetch groups' });
        }
    },
    getById: async (req, res) => {
        try {
            const group = await group_service_1.groupService.getById(Number(req.params.id));
            if (!group)
                return res.status(404).json({ message: 'Group not found' });
            res.status(200).json(group);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Group by ID');
            res.status(500).json({ message: 'Failed to fetch group' });
        }
    },
    create: async (req, res) => {
        try {
            const group = await group_service_1.groupService.create(req.body);
            res.status(201).json(group);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Group');
            res.status(400).json({ message: 'Failed to create group' });
        }
    },
    update: async (req, res) => {
        try {
            const group = await group_service_1.groupService.update(Number(req.params.id), req.body);
            if (!group)
                return res.status(404).json({ message: 'Group not found' });
            res.status(200).json(group);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Group');
            res.status(400).json({ message: 'Failed to update group' });
        }
    },
    delete: async (req, res) => {
        try {
            await group_service_1.groupService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Group');
            res.status(500).json({ message: 'Failed to delete group' });
        }
    },
    getByLevel: async (req, res) => {
        try {
            const groups = await group_service_1.groupService.getByLevel(req.params.level);
            res.status(200).json(groups);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Groups by Level');
            res.status(500).json({ message: 'Failed to fetch groups by level' });
        }
    },
};
//# sourceMappingURL=group.controller.js.map