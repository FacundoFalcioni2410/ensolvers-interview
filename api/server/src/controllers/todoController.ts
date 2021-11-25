import { Request, Response } from "express";
import pool from '../database'

class TodoController{
    public get(req: Request, res: Response){
        pool.query('SELECT * FROM TODOs', (err, results, fields) =>{
            res.json({data: results});
        });
    }

    public getByFolder(req: Request, res: Response){
        pool.query('SELECT * FROM TODOs where folder_id = ?',[req.query.id], (err, results, fields) =>{
            res.json({data: results});
        });
    }

    public add(req: Request, res: Response){
        pool.query('INSERT INTO TODOs set ?', [req.body]);
        res.json({message: 'Todo saved'});
    }

    public update(req: Request, res: Response){
        const { task, isFinished } = req.body;
        pool.query(`UPDATE TODOs SET task = ?, isFinished = ? where id = ?`, [task, isFinished, req.params.id], (err, results, fields) =>{
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
        pool.query(`DELETE FROM TODOs where id = ?`, [req.params.id], (err, results, fields) =>{
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