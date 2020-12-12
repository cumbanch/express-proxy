import { Request, Response } from 'express';

class TodosController {
  public get(req: Request, res: Response): void {
    try {
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default TodosController;
