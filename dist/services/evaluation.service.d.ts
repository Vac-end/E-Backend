export declare const evaluationService: {
    getAll: () => Promise<import("../models").Evaluation[]>;
    getById: (id: number) => Promise<import("../models").Evaluation | null>;
    create: (data: {
        title: string;
        type: "Quiz" | "Examen" | "Tarea";
        lessonId: number;
        questions?: string;
    }) => Promise<import("../models").Evaluation>;
    update: (id: number, data: Partial<{
        title: string;
        type: "Quiz" | "Examen" | "Tarea";
        questions?: string;
    }>) => Promise<[affectedCount: number, affectedRows: import("../models").Evaluation[]]>;
    delete: (id: number) => Promise<number>;
    getByLesson: (lessonId: number) => Promise<import("../models").Evaluation[]>;
};
//# sourceMappingURL=evaluation.service.d.ts.map