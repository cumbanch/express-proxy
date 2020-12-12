import { Router } from 'express';
import NutritionController from '../controllers/nutrition_controller';

const router = Router();
const nutritionController = new NutritionController();

router.get('/', nutritionController.get);

export default router;
