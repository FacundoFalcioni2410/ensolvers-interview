"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TodoController {
    get(req, res) {
        database_1.default.query('DESCRIBE todos');
        res.json('WORKING');
    }
    add(req, res) {
        database_1.default.query('INSERT INTO todos set ?', [req.body]);
        res.json({ message: 'Todo saved' });
    }
}
const todoController = new TodoController();
exports.default = todoController;
