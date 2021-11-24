import { Request, Response } from "express";
import pool from '../database'

class TodoController{
    public get(req: Request, res: Response){
        pool.query('SELECT * FROM todos', (err, results, fields) =>{
            res.json({data: results});
        });
    }

    public add(req: Request, res: Response){
        pool.query('INSERT INTO todos set ?', [req.body]);
        res.json({message: 'Todo saved'});
    }

    public update(req: Request, res: Response){
        const { task, isFinished } = req.body;
        console.log(isFinished);
        console.log(task);
        pool.query(`UPDATE todos SET task = ?, isFinished = ? where id = ?`, [task, isFinished, req.params.id], (err, results, fields) =>{
            console.log(err, results, fields);
            if(!err){
                if(results.changedRows){
                    res.json({message: 'Task updated'});
                }else{
                    res.json({message: "No task updated"});
                }
            }
        });
    }

    public deleteById(req: Request, res: Response){
        pool.query(`DELETE FROM todos where id = ?`, [req.params.id], (err, results, fields) =>{
            if(!err){
                if(results.affectedRows){
                    res.json({message: 'Task deleted'});
                }else{
                    res.json({message: "No task deleted"});
                }
            }         
        });
    }
}

const todoController = new TodoController();
export default todoController;