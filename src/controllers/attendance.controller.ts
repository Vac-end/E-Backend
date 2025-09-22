import { Request, Response } from 'express';
import { attendanceService } from '../services/attendance.service';
import { handleServiceError } from '../utils/helpers';

export const attendanceController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const attendances = await attendanceService.getAll();
      res.status(200).json(attendances);
    } catch (error) {
      handleServiceError(error, 'Get All Attendances');
      res.status(500).json({ message: 'Failed to fetch attendances' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const attendance = await attendanceService.getById(Number(req.params.id));
      if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
      res.status(200).json(attendance);
    } catch (error) {
      handleServiceError(error, 'Get Attendance by ID');
      res.status(500).json({ message: 'Failed to fetch attendance' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const attendance = await attendanceService.create(req.body);
      res.status(201).json(attendance);
    } catch (error) {
      handleServiceError(error, 'Create Attendance');
      res.status(400).json({ message: 'Failed to create attendance' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const attendance = await attendanceService.update(Number(req.params.id), req.body);
      if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
      res.status(200).json(attendance);
    } catch (error) {
      handleServiceError(error, 'Update Attendance');
      res.status(400).json({ message: 'Failed to update attendance' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await attendanceService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Attendance');
      res.status(500).json({ message: 'Failed to delete attendance' });
    }
  },
  getByStudent: async (req: Request, res: Response) => {
    try {
      const attendances = await attendanceService.getByStudent(Number(req.params.studentId));
      res.status(200).json(attendances);
    } catch (error) {
      handleServiceError(error, 'Get Attendances by Student');
      res.status(500).json({ message: 'Failed to fetch attendances by student' });
    }
  },
  getBySchedule: async (req: Request, res: Response) => {
    try {
      const attendances = await attendanceService.getBySchedule(Number(req.params.scheduleId));
      res.status(200).json(attendances);
    } catch (error) {
      handleServiceError(error, 'Get Attendances by Schedule');
      res.status(500).json({ message: 'Failed to fetch attendances by schedule' });
    }
  },
};