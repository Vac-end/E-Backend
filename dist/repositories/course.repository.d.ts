import { Course, CourseCreationAttributes } from '../models/course.model';
export declare const courseRepository: {
    findAll: () => Promise<Course[]>;
    findById: (id: number) => Promise<Course | null>;
    create: (data: CourseCreationAttributes) => Promise<Course>;
    update: (id: number, data: Partial<CourseCreationAttributes>) => Promise<[affectedCount: number, affectedRows: Course[]]>;
    delete: (id: number) => Promise<number>;
    findByTeacher: (teacherId: number) => Promise<Course[]>;
};
//# sourceMappingURL=course.repository.d.ts.map