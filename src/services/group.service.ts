import { groupRepository } from '../repositories/group.repository';
import { Course } from '../models/course.model';
import { Group } from '../models/group.model'; // Importar el modelo
import { handleServiceError } from '../utils/helpers';

export const groupService = {
  getAll: async () => {
    try {
      const groups = await groupRepository.findAll();
      return groups;
    } catch (error) {
      handleServiceError(error, 'Get All Groups');
      throw error;
    }
  },

  getById: async (id: number) => {
    try {
      const group = await groupRepository.findById(id);
      if (!group) throw new Error('Group not found');
      return group;
    } catch (error) {
      handleServiceError(error, 'Get Group by ID');
      throw error;
    }
  },

  create: async (courseId: number, createdBy: number, name: string) => {
    try {
      const course = await Course.findByPk(courseId);
      if (!course) throw new Error('Course not found');
      if (!course.isGroupEnabled) throw new Error('Groups are not enabled for this course');
      const group = await groupRepository.create({ courseId, createdBy, name, size: 0 });
      return group;
    } catch (error) {
      handleServiceError(error, 'Create Group');
      throw error;
    }
  },

  update: async (id: number, data: Partial<{ name: string }>) => {
    try {
      const updated = await groupRepository.update(id, data);
      if (!updated) throw new Error('Group not found');
      return updated;
    } catch (error) {
      handleServiceError(error, 'Update Group');
      throw error;
    }
  },

  delete: async (id: number) => {
    try {
      const deleted = await groupRepository.delete(id);
      if (!deleted) throw new Error('Group not found');
      return deleted;
    } catch (error) {
      handleServiceError(error, 'Delete Group');
      throw error;
    }
  },

  getByCourse: async (courseId: number) => {
    try {
      const groups = await groupRepository.findByCourse(courseId);
      return groups;
    } catch (error) {
      handleServiceError(error, 'Get Groups by Course');
      throw error;
    }
  },

  addMember: async (groupId: number, userId: number) => {
    try {
      const group = await groupRepository.findById(groupId) as Group & { $add: (association: string, userId: number) => Promise<void> };
      if (!group) throw new Error('Group not found');
      const course = await Course.findByPk(group.courseId);
      if (!course) throw new Error('Course not found');
      if (!course.isGroupEnabled) throw new Error('Groups are not enabled for this course');
      if (course.maxGroupSize && group.size >= course.maxGroupSize) throw new Error('Group is full');
      await group.$add('Members', userId);
      group.size += 1;
      await group.save();
      return group;
    } catch (error) {
      handleServiceError(error, 'Add Member to Group');
      throw error;
    }
  },

  removeMember: async (groupId: number, userId: number) => {
    try {
      const group = await groupRepository.findById(groupId) as Group & { $remove: (association: string, userId: number) => Promise<void> };
      if (!group) throw new Error('Group not found');
      await group.$remove('Members', userId); 
      group.size -= 1;
      await group.save();
      return group;
    } catch (error) {
      handleServiceError(error, 'Remove Member from Group');
      throw error;
    }
  },
};