"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activityRepository = void 0;
const activity_model_1 = require("../models/activity.model");
exports.activityRepository = {
    findAll: () => activity_model_1.Activity.findAll({ include: ['User'], order: [['createdAt', 'DESC']] }),
    findById: (id) => activity_model_1.Activity.findByPk(id, { include: ['User'] }),
    create: (data) => activity_model_1.Activity.create(data),
    delete: (id) => activity_model_1.Activity.destroy({ where: { id } }),
    findByUser: (userId) => activity_model_1.Activity.findAll({ where: { userId }, order: [['createdAt', 'DESC']] }),
};
//# sourceMappingURL=activity.repository.js.map