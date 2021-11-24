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
        this.router.put('/:id', todoController.update);
        this.router.delete('/:id', todoController.deleteById);
    }
}

const todoRoutes = new TodoRoutes();

export default todoRoutes.router;