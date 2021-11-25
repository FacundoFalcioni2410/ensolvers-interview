"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    login(req, res) {
        database_1.default.query('SELECT * FROM USERS WHERE email = ? AND pass = ?', [req.body.email, req.body.pass], (err, results, fields) => {
            console.log(results);
            console.log(results.length);
            if (results.length > 0) {
                res.json({ success: true });
            }
            else {
                res.json({ success: false });
            }
        });
    }
}
const userController = new UserController();
exports.default = userController;
