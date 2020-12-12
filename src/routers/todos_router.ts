import { Router } from 'express';
import TodosController from '../controllers/todos_controller';

const router = Router();
const todosController = new TodosController();

router.get('/', todosController.get);

export default router;
