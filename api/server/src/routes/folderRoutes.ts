import { Router } from 'express';
import folderController from '../controllers/folderController';

class FolderRoutes{
    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', folderController.get);
        this.router.post('/', folderController.add);
        this.router.delete('/:id', folderController.deleteById);
    }
}

const folderRoutes = new FolderRoutes();

export default folderRoutes.router;