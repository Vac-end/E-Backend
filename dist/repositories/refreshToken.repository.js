"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenRepository = void 0;
const refreshtoken_model_1 = require("../models/refreshtoken.model");
exports.refreshTokenRepository = {
    findAll: () => refreshtoken_model_1.RefreshToken.findAll({ include: ['User'] }),
    findById: (id) => refreshtoken_model_1.RefreshToken.findByPk(id, { include: ['User'] }),
    findByToken: (token) => refreshtoken_model_1.RefreshToken.findOne({ where: { token } }),
    create: (data) => refreshtoken_model_1.RefreshToken.create(data),
    delete: (id) => refreshtoken_model_1.RefreshToken.destroy({ where: { id } }),
    deleteByToken: (token) => refreshtoken_model_1.RefreshToken.destroy({ where: { token } }),
    findByUser: (userId) => refreshtoken_model_1.RefreshToken.findAll({ where: { userId } }),
};
//# sourceMappingURL=refreshToken.repository.js.map