"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TodoController {
    get(req, res) {
        database_1.default.query('SELECT * FROM todos', (err, results, fields) => {
            res.json({ data: results });
        });
    }
    add(req, res) {
        database_1.default.query('INSERT INTO todos set ?', [req.body]);
        res.json({ message: 'Todo saved' });
    }
    update(req, res) {
        const { task, isFinished } = req.body;
        console.log(isFinished);
        console.log(task);
        database_1.default.query(`UPDATE todos SET task = ?, isFinished = ? where id = ?`, [task, isFinished, req.params.id], (err, results, fields) => {
            console.log(err, results, fields);
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
        database_1.default.query(`DELETE FROM todos where id = ?`, [req.params.id], (err, results, fields) => {
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
