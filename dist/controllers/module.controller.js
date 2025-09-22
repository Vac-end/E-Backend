"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleController = void 0;
const module_service_1 = require("../services/module.service");
const helpers_1 = require("../utils/helpers");
exports.moduleController = {
    getAll: async (req, res) => {
        try {
            const modules = await module_service_1.moduleService.getAll();
            res.status(200).json(modules);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Modules');
            res.status(500).json({ message: 'Failed to fetch modules' });
        }
    },
    getById: async (req, res) => {
        try {
            const module = await module_service_1.moduleService.getById(Number(req.params.id));
            if (!module)
                return res.status(404).json({ message: 'Module not found' });
            res.status(200).json(module);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Module by ID');
            res.status(500).json({ message: 'Failed to fetch module' });
        }
    },
    create: async (req, res) => {
        try {
            const module = await module_service_1.moduleService.create(req.body);
            res.status(201).json(module);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Module');
            res.status(400).json({ message: 'Failed to create module' });
        }
    },
    update: async (req, res) => {
        try {
            const module = await module_service_1.moduleService.update(Number(req.params.id), req.body);
            if (!module)
                return res.status(404).json({ message: 'Module not found' });
            res.status(200).json(module);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Module');
            res.status(400).json({ message: 'Failed to update module' });
        }
    },
    delete: async (req, res) => {
        try {
            await module_service_1.moduleService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Module');
            res.status(500).json({ message: 'Failed to delete module' });
        }
    },
    getByCourse: async (req, res) => {
        try {
            const modules = await module_service_1.moduleService.getByCourse(Number(req.params.courseId));
            res.status(200).json(modules);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Modules by Course');
            res.status(500).json({ message: 'Failed to fetch modules by course' });
        }
    },
};
//# sourceMappingURL=module.controller.js.map