"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class FolderController {
    get(req, res) {
        database_1.default.query('SELECT * FROM FOLDERS', (err, results, fields) => {
            res.json({ data: results });
        });
    }
    add(req, res) {
        database_1.default.query('INSERT INTO FOLDERS set ?', [req.body]);
        res.json({ message: 'Folder saved' });
    }
    deleteById(req, res) {
        database_1.default.query(`DELETE FROM TODOs where folder_id = ?`, [req.params.id], (err, results, fields) => {
            if (!err) {
                database_1.default.query('DELETE FROM FOLDERS WHERE folder_id = ?', [req.params.id], (err, results, fields) => {
                    if (!err) {
                        res.json({ message: 'Folder and associated ToDos were eliminated' });
                    }
                    else {
                        res.json({ err: err });
                    }
                });
            }
            else {
                res.json({ error: err });
            }
        });
    }
}
const folderController = new FolderController();
exports.default = folderController;
