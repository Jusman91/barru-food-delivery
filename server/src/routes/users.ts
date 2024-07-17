import express from 'express';
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	udpateUser,
} from '../controllers';

const router = express.Router();

router.post('/', createUser);
router.put('/:id', udpateUser);
router.post('/:id', deleteUser);
router.get('/:id', getUser);
router.get('/', getUsers);

export default router;
