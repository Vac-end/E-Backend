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
      const { id } = req.params;
      const group = await groupService.getById(Number(id));
      if (!group) return res.status(404).json({ message: 'Group not found' });
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Get Group by ID');
      res.status(500).json({ message: 'Failed to fetch group' });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const { courseId, name } = req.body;
      const userId = req.user?.id;
      if (!userId) throw new Error('User not authenticated');
      const group = await groupService.create(Number(courseId), Number(userId), name);
      res.status(201).json(group);
    } catch (error) {
      handleServiceError(error, 'Create Group');
      res.status(400).json({ message: 'Failed to create group' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const group = await groupService.update(Number(id), { name });
      if (!group) return res.status(404).json({ message: 'Group not found' });
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Update Group');
      res.status(500).json({ message: 'Failed to update group' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await groupService.delete(Number(id));
      res.status(204).send();
    } catch (error) {
      handleServiceError(error, 'Delete Group');
      res.status(500).json({ message: 'Failed to delete group' });
    }
  },

  getByCourse: async (req: Request, res: Response) => {
    try {
      const { courseId } = req.params;
      const groups = await groupService.getByCourse(Number(courseId));
      res.status(200).json(groups);
    } catch (error) {
      handleServiceError(error, 'Get Groups by Course');
      res.status(500).json({ message: 'Failed to fetch groups by course' });
    }
  },

  addMember: async (req: Request, res: Response) => {
    try {
      const { groupId, userId } = req.body;
      const group = await groupService.addMember(Number(groupId), Number(userId));
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Add Member to Group');
      res.status(400).json({ message: 'Failed to add member to group' });
    }
  },

  removeMember: async (req: Request, res: Response) => {
    try {
      const { groupId, userId } = req.body;
      const group = await groupService.removeMember(Number(groupId), Number(userId));
      res.status(200).json(group);
    } catch (error) {
      handleServiceError(error, 'Remove Member from Group');
      res.status(400).json({ message: 'Failed to remove member from group' });
    }
  },
};