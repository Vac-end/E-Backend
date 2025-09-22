"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submissionService = void 0;
const submmission_repository_1 = require("../repositories/submmission.repository");
const sanitizer_1 = require("../utils/sanitizer"); // For file path sanitization
exports.submissionService = {
    getAll: () => submmission_repository_1.submissionRepository.findAll(),
    getById: (id) => submmission_repository_1.submissionRepository.findById(id),
    create: (data) => {
        const sanitizedFilePath = (0, sanitizer_1.sanitize)(data.filePath); // Prevent XSS in file paths
        return submmission_repository_1.submissionRepository.create({ ...data, filePath: sanitizedFilePath });
    },
    update: (id, data) => {
        if (data.filePath)
            data.filePath = (0, sanitizer_1.sanitize)(data.filePath);
        return submmission_repository_1.submissionRepository.update(id, data);
    },
    delete: (id) => submmission_repository_1.submissionRepository.delete(id),
    getByAssignment: (assignmentId) => submmission_repository_1.submissionRepository.findByAssignment(assignmentId),
    getByStudent: (studentId) => submmission_repository_1.submissionRepository.findByStudent(studentId),
};
//# sourceMappingURL=submission.service.js.map