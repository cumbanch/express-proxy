import { Request, Response } from 'express';

// import axios from 'axios';

class NutritionController {
  public get(req: Request, res: Response): void {
    try {
      // axios.get();
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default NutritionController;
