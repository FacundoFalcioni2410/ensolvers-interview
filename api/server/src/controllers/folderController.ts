import { Request, Response } from "express";
import pool from '../database';

class FolderController{
    public get(req: Request, res: Response){
        pool.query('SELECT * FROM FOLDERS', (err, results, fields) =>{
            res.json( {data: results });
        });
    }

    public add(req: Request, res: Response){
        pool.query('INSERT INTO FOLDERS set ?', [req.body]);
        res.json({message: 'Folder saved'});
    }

    public deleteById(req: Request, res: Response){
        pool.query(`DELETE FROM TODOs where folder_id = ?`, [req.params.id], (err, results, fields) =>{
            if(!err){
                pool.query('DELETE FROM FOLDERS WHERE folder_id = ?', [req.params.id], (err, results, fields) =>{
                    if(!err){
                        res.json({message: 'Folder and associated ToDos were eliminated'});
                    }
                    else{
                        res.json({err: err});
                    }
                });
            }
            else{
                res.json({error: err});
            }       
        });
    }
}

const folderController = new FolderController();
export default folderController;