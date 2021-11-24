"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const pool = mysql_1.default.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo_db',
    password: ''
});
pool.getConnection((err, connection) => {
    if (err) {
        console.log(err);
        throw err;
    }
    connection.release();
    console.log('DB is Connected');
});
exports.default = pool;
