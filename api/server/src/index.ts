import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import todoRoutes from './routes/todoRoutes';
import pool from './database';

class Server{
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server running on port ', this.app.get('port'));
        });
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(): void{
        this.app.use('/', indexRoutes);
        this.app.use('/todo', todoRoutes);
    }
} 

const server = new Server();
server.start();