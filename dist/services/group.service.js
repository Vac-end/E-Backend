"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupService = void 0;
const group_repository_1 = require("../repositories/group.repository");
exports.groupService = {
    getAll: () => group_repository_1.groupRepository.findAll(),
    getById: (id) => group_repository_1.groupRepository.findById(id),
    create: (data) => group_repository_1.groupRepository.create(data),
    update: (id, data) => group_repository_1.groupRepository.update(id, data),
    delete: (id) => group_repository_1.groupRepository.delete(id),
    getByLevel: (level) => group_repository_1.groupRepository.findByLevel(level),
};
//# sourceMappingURL=group.service.js.map