"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
console.log(process.env.DATABASE_NAME);
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const folderRoutes_1 = __importDefault(require("./routes/folderRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port ', this.app.get('port'));
        });
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use('/todo', todoRoutes_1.default);
        this.app.use('/todo/folder', folderRoutes_1.default);
        this.app.use('/user', userRoutes_1.default);
    }
}
const server = new Server();
server.start();
