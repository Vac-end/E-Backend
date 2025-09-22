"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRepository = void 0;
const schedule_model_1 = require("../models/schedule.model");
exports.scheduleRepository = {
    findAll: () => schedule_model_1.Schedule.findAll({ include: ['Course', 'Attendances'] }),
    findById: (id) => schedule_model_1.Schedule.findByPk(id, { include: ['Course', 'Attendances'] }),
    create: (data) => schedule_model_1.Schedule.create(data),
    update: (id, data) => schedule_model_1.Schedule.update(data, { where: { id }, returning: true }),
    delete: (id) => schedule_model_1.Schedule.destroy({ where: { id } }),
    findByCourse: (courseId) => schedule_model_1.Schedule.findAll({ where: { courseId } }),
};
//# sourceMappingURL=schedule.repository.js.map