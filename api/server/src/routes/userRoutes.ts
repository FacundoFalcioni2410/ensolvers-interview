import { Router } from 'express';
import userController from '../controllers/userController';

class UserRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/', userController.login);

    }
}

const userRoutes = new UserRoutes();

export default userRoutes.router;