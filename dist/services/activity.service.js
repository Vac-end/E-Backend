"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityService = void 0;
const activity_repository_1 = require("../repositories/activity.repository");
exports.activityService = {
    getAll: () => activity_repository_1.activityRepository.findAll(),
    getById: (id) => activity_repository_1.activityRepository.findById(id),
    create: (data) => activity_repository_1.activityRepository.create(data),
    delete: (id) => activity_repository_1.activityRepository.delete(id),
    getByUser: (userId) => activity_repository_1.activityRepository.findByUser(userId),
};
//# sourceMappingURL=activity.service.js.map