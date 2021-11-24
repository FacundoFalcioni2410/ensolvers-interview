import { Request, Response } from "express";
import pool from '../database'

class TodoController{
    public get(req: Request, res: Response){
        pool.query('DESCRIBE todos');
        res.json('WORKING');
    }

    public add(req: Request, res: Response){
        pool.query('INSERT INTO todos set ?', [req.body]);
        res.json({message: 'Todo saved'});
    }
}

const todoController = new TodoController();
export default todoController;