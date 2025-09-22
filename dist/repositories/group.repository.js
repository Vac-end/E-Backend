"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRepository = void 0;
const group_model_1 = require("../models/group.model");
exports.groupRepository = {
    findAll: () => group_model_1.Group.findAll({ include: ['Members'] }),
    findById: (id) => group_model_1.Group.findByPk(id, { include: ['Members'] }),
    create: (data) => group_model_1.Group.create(data),
    update: (id, data) => group_model_1.Group.update(data, { where: { id }, returning: true }),
    delete: (id) => group_model_1.Group.destroy({ where: { id } }),
    findByLevel: (level) => group_model_1.Group.findAll({ where: { level } }),
};
//# sourceMappingURL=group.repository.js.map