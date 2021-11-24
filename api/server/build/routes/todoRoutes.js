"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = __importDefault(require("../controllers/todoController"));
class TodoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', todoController_1.default.get);
        this.router.post('/', todoController_1.default.add);
        this.router.put('/:id', todoController_1.default.update);
        this.router.delete('/:id', todoController_1.default.deleteById);
    }
}
const todoRoutes = new TodoRoutes();
exports.default = todoRoutes.router;
