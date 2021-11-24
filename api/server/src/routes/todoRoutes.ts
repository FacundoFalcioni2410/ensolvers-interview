import { Router } from 'express';
import todoController from '../controllers/todoController';

class TodoRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', todoController.get);
        this.router.post('/', todoController.add);
    }
}

const todoRoutes = new TodoRoutes();

export default todoRoutes.router;