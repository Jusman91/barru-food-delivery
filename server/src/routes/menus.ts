import express from 'express';
import {
	createMenu,
	deleteMenu,
	getMenu,
	getMenus,
	udpateMenu,
} from '../controllers';

const router = express.Router();

router.post('/', createMenu);
router.put('/:id', udpateMenu);
router.post('/:id', deleteMenu);
router.get('/:id', getMenu);
router.get('/', getMenus);

export default router;
