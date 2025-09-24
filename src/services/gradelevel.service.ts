import { gradeLevelRepository } from '../repositories/gradelevel.repository';
import { logger } from '../utils/logger';

export const gradeLevelService = {
  getAll: () => {
    try {
      return gradeLevelRepository.findAll();
    } catch (error) {
      logger.error('Error fetching all grade levels:', error);
      throw error;
    }
  },
  getById: (id: number) => {
    try {
      const gradeLevel = gradeLevelRepository.findById(id);
      if (!gradeLevel) {
        logger.warn(`GradeLevel with id ${id} not found`);
        throw new Error('GradeLevel not found');
      }
      return gradeLevel;
    } catch (error) {
      logger.error(`Error fetching grade level with id ${id}:`, error);
      throw error;
    }
  },
  create: (data: { level: string; category: 'Inicial' | 'Primaria' | 'Secundaria' }) => {
    try {
      if (!['Inicial', 'Primaria', 'Secundaria'].includes(data.category)) {
        logger.warn('Invalid category provided:', data.category);
        throw new Error('Invalid category');
      }
      return gradeLevelRepository.create(data);
    } catch (error) {
      logger.error('Error creating grade level:', error);
      throw error;
    }
  },
  update: async (id: number, data: Partial<{ level: string; category: 'Inicial' | 'Primaria' | 'Secundaria' }>) => {
    try {
      if (data.category && !['Inicial', 'Primaria', 'Secundaria'].includes(data.category)) {
        logger.warn('Invalid category provided for update:', data.category);
        throw new Error('Invalid category');
      }
      const [affectedCount] = await gradeLevelRepository.update(id, data);
      if (affectedCount === 0) {
        logger.warn(`GradeLevel with id ${id} not found for update`);
        throw new Error('GradeLevel not found');
      }
      return gradeLevelRepository.findById(id);
    } catch (error) {
      logger.error(`Error updating grade level with id ${id}:`, error);
      throw error;
    }
  },
  delete: async (id: number) => {
    try {
      const result = await gradeLevelRepository.delete(id);
      if (result === 0) {
        logger.warn(`GradeLevel with id ${id} not found for deletion`);
        throw new Error('GradeLevel not found');
      }
      return true;
    } catch (error) {
      logger.error(`Error deleting grade level with id ${id}:`, error);
      throw error;
    }
  },
  getByCategory: (category: 'Inicial' | 'Primaria' | 'Secundaria') => {
    try {
      return gradeLevelRepository.findByCategory(category);
    } catch (error) {
      logger.error(`Error fetching grade levels by category ${category}:`, error);
      throw error;
    }
  },
};