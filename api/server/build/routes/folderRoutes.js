"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const folderController_1 = __importDefault(require("../controllers/folderController"));
class FolderRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', folderController_1.default.get);
        this.router.post('/', folderController_1.default.add);
        this.router.delete('/:id', folderController_1.default.deleteById);
    }
}
const folderRoutes = new FolderRoutes();
exports.default = folderRoutes.router;
