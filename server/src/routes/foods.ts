import express from 'express';
import {
	createFood,
	deleteFood,
	getFood,
	getFoods,
	udpateFood,
} from '../controllers';

const router = express.Router();

router.post('/', createFood);
router.put('/:id', udpateFood);
router.post('/:id', deleteFood);
router.get('/:id', getFood);
router.get('/', getFoods);

export default router;
