import { Request, Response } from 'express';
import { groupService } from '../services/group.service';
import { handleServiceError } from '../utils/helpers';

export const groupController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const groups = await groupService.getAll();
      res.status(200).json(groups);
    } catch (error) {
      handleServiceError(error, 'Get All Groups');
      res.status(500).json({ message: 'Failed to fetch groups' });
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const group = await groupService.getById(Number(req.params.id));
      if (!group) return res.status(404).json({ message: 'Group not found' });
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Get Group by ID');
      res.status(500).json({ message: 'Failed to fetch group' });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const group = await groupService.create(req.body);
      res.status(201).json(group);
    } catch (error) {
      handleServiceError(error, 'Create Group');
      res.status(400).json({ message: 'Failed to create group' });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const group = await groupService.update(Number(req.params.id), req.body);
      if (!group) return res.status(404).json({ message: 'Group not found' });
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Update Group');
      res.status(400).json({ message: 'Failed to update group' });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      await groupService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Group');
      res.status(500).json({ message: 'Failed to delete group' });
    }
  },
  getByLevel: async (req: Request, res: Response) => {
    try {
      const groups = await groupService.getByLevel(req.params.level as string);
      res.status(200).json(groups);
    } catch (error) {
      handleServiceError(error, 'Get Groups by Level');
      res.status(500).json({ message: 'Failed to fetch groups by level' });
    }
  },
};