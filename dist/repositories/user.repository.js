"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_model_1 = require("../models/user.model");
exports.userRepository = {
    findAll: () => user_model_1.User.findAll({ attributes: { exclude: ['password'] } }), // Exclude password for security
    findById: (id) => user_model_1.User.findByPk(id, { attributes: { exclude: ['password'] } }),
    findByEmail: (email) => user_model_1.User.findOne({ where: { email }, attributes: { exclude: ['password'] } }),
    findByUsername: (username) => user_model_1.User.findOne({ where: { username }, attributes: { exclude: ['password'] } }),
    create: (data) => user_model_1.User.create(data),
    update: (id, data) => user_model_1.User.update(data, { where: { id }, returning: true }),
    delete: (id) => user_model_1.User.destroy({ where: { id } }),
    findByRole: (role) => user_model_1.User.findAll({ where: { role } }),
};
//# sourceMappingURL=user.repository.js.map