"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userService = {
    getAll: () => user_repository_1.userRepository.findAll(),
    getById: (id) => user_repository_1.userRepository.findById(id),
    create: async (data) => {
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        return user_repository_1.userRepository.create({ ...data, password: hashedPassword });
    },
    update: (id, data) => {
        if (data.password)
            throw new Error('Password update not allowed via this method');
        return user_repository_1.userRepository.update(id, data);
    },
    delete: (id) => user_repository_1.userRepository.delete(id),
    getByRole: (role) => user_repository_1.userRepository.findByRole(role),
};
//# sourceMappingURL=user.service.js.map