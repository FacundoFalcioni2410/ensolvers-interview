import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import todoRoutes from './routes/todoRoutes';
import folderRoutes from './routes/folderRoutes';

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
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes(): void{
        this.app.use('/todo', todoRoutes);
        this.app.use('/todo/folder', folderRoutes);
    }
} 

const server = new Server();
server.start();