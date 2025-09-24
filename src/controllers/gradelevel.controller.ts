import { Request, Response } from 'express';
import { gradeLevelService } from '../services/gradelevel.service';

export const GradeLevelController = {
  create: async (req: Request, res: Response) => {
    try {
      const { level, category } = req.body;
      const gradeLevel = await gradeLevelService.create({ level, category });
      res.status(201).json(gradeLevel);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },

  findAll: async (req: Request, res: Response) => {
    try {
      const gradeLevels = await gradeLevelService.getAll();
      res.status(200).json(gradeLevels);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  },
  findById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const gradeLevel = await gradeLevelService.getById(Number(id));
      res.status(200).json(gradeLevel);
    } catch (error:any) {
      res.status(404).json({ message: error.message });
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { level, category } = req.body;
      const gradeLevel = await gradeLevelService.update(Number(id), { level, category });
      res.status(200).json(gradeLevel);
    } catch (error:any) {
      res.status(400).json({ message: error.message });
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await gradeLevelService.delete(Number(id));
      res.status(204).send();
    } catch (error:any) {
      res.status(404).json({ message: error.message });
    }
  },
  getByCategory: async (req: Request, res: Response) => {
    try {
      const { category } = req.params;
      const gradeLevels = await gradeLevelService.getByCategory(category as 'Inicial' | 'Primaria' | 'Secundaria');
      res.status(200).json(gradeLevels);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

}