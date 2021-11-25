"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TodoController {
    get(req, res) {
        database_1.default.query('SELECT * FROM TODOs', (err, results, fields) => {
            res.json({ data: results });
        });
    }
    getByFolder(req, res) {
        database_1.default.query('SELECT * FROM TODOs where folder_id = ?', [req.query.id], (err, results, fields) => {
            res.json({ data: results });
        });
    }
    add(req, res) {
        database_1.default.query('INSERT INTO TODOs set ?', [req.body]);
        res.json({ message: 'Todo saved' });
    }
    update(req, res) {
        const { task, isFinished } = req.body;
        database_1.default.query(`UPDATE TODOs SET task = ?, isFinished = ? where id = ?`, [task, isFinished, req.params.id], (err, results, fields) => {
            if (!err) {
                if (results.changedRows) {
                    res.json({ message: 'Task updated' });
                }
                else {
                    res.json({ message: "No task updated" });
                }
            }
        });
    }
    deleteById(req, res) {
        database_1.default.query(`DELETE FROM TODOs where id = ?`, [req.params.id], (err, results, fields) => {
            if (!err) {
                if (results.affectedRows) {
                    res.json({ message: 'Task deleted' });
                }
                else {
                    res.json({ message: "No task deleted" });
                }
            }
        });
    }
}
const todoController = new TodoController();
exports.default = todoController;
