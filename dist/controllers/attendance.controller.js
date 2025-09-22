"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceController = void 0;
const attendance_service_1 = require("../services/attendance.service");
const helpers_1 = require("../utils/helpers");
exports.attendanceController = {
    getAll: async (req, res) => {
        try {
            const attendances = await attendance_service_1.attendanceService.getAll();
            res.status(200).json(attendances);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get All Attendances');
            res.status(500).json({ message: 'Failed to fetch attendances' });
        }
    },
    getById: async (req, res) => {
        try {
            const attendance = await attendance_service_1.attendanceService.getById(Number(req.params.id));
            if (!attendance)
                return res.status(404).json({ message: 'Attendance not found' });
            res.status(200).json(attendance);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Attendance by ID');
            res.status(500).json({ message: 'Failed to fetch attendance' });
        }
    },
    create: async (req, res) => {
        try {
            const attendance = await attendance_service_1.attendanceService.create(req.body);
            res.status(201).json(attendance);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Create Attendance');
            res.status(400).json({ message: 'Failed to create attendance' });
        }
    },
    update: async (req, res) => {
        try {
            const attendance = await attendance_service_1.attendanceService.update(Number(req.params.id), req.body);
            if (!attendance)
                return res.status(404).json({ message: 'Attendance not found' });
            res.status(200).json(attendance);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Update Attendance');
            res.status(400).json({ message: 'Failed to update attendance' });
        }
    },
    delete: async (req, res) => {
        try {
            await attendance_service_1.attendanceService.delete(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Delete Attendance');
            res.status(500).json({ message: 'Failed to delete attendance' });
        }
    },
    getByStudent: async (req, res) => {
        try {
            const attendances = await attendance_service_1.attendanceService.getByStudent(Number(req.params.studentId));
            res.status(200).json(attendances);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Attendances by Student');
            res.status(500).json({ message: 'Failed to fetch attendances by student' });
        }
    },
    getBySchedule: async (req, res) => {
        try {
            const attendances = await attendance_service_1.attendanceService.getBySchedule(Number(req.params.scheduleId));
            res.status(200).json(attendances);
        }
        catch (error) {
            (0, helpers_1.handleServiceError)(error, 'Get Attendances by Schedule');
            res.status(500).json({ message: 'Failed to fetch attendances by schedule' });
        }
    },
};
//# sourceMappingURL=attendance.controller.js.map