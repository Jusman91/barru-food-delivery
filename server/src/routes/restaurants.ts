import express from 'express';
import {
	createRestaurant,
	deleteRestaurant,
	getRestaurant,
	getRestaurants,
	udpateRestaurant,
} from '../controllers';

const router = express.Router();

router.post('/', createRestaurant);
router.put('/:id', udpateRestaurant);
router.post('/:id', deleteRestaurant);
router.get('/:id', getRestaurant);
router.get('/', getRestaurants);

export default router;
