import express from 'express';
import {
	deleteDriver,
	getDriver,
	getDrivers,
	udpateDriver,
} from '../controllers';

const router = express.Router();

router.put('/:id', udpateDriver);
router.post('/:id', deleteDriver);
router.get('/:id', getDriver);
router.get('/', getDrivers);

export default router;
