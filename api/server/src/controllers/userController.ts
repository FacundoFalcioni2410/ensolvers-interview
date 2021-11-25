import { Request, Response } from "express";
import pool from '../database';

class UserController{
    public login(req: Request, res: Response){
        pool.query('SELECT * FROM USERS WHERE email = ? AND pass = ?',[req.body.email, req.body.pass], (err, results, fields) =>{
            console.log(results);
            console.log(results.length)
            if(results.length > 0){
                res.json({success: true});
            }else{
                res.json({success: false});
            }
        });
    }
}

const userController = new UserController();
export default userController;