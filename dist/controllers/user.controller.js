"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("../services/user.service");
const helpers_1 = require("../utils/helpers");
exports.userController = {
    getAll: async (req, res) => {
        try {
            const users = await user_service_1.userService.getAll();
            res.status(200).json(users);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Users');
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    },
    getById: async (req, res) => {
        try {
            const user = await user_service_1.userService.getById(Number(req.params.id));
            if (!user)
                return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get User by ID');
            res.status(500).json({ message: 'Failed to fetch user' });
        }
    },
    create: async (req, res) => {
        try {
            const user = await user_service_1.userService.create(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create User');
            res.status(400).json({ message: 'Failed to create user' });
        }
    },
    update: async (req, res) => {
        try {
            const user = await user_service_1.userService.update(Number(req.params.id), req.body);
            if (!user)
                return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update User');
            res.status(400).json({ message: 'Failed to update user' });
        }
    },
    delete: async (req, res) => {
        try {
            await user_service_1.userService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete User');
            res.status(500).json({ message: 'Failed to delete user' });
        }
    },
    getByRole: async (req, res) => {
        try {
            const users = await user_service_1.userService.getByRole(req.params.role);
            res.status(200).json(users);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Users by Role');
            res.status(500).json({ message: 'Failed to fetch users by role' });
        }
    },
};
//# sourceMappingURL=user.controller.js.map