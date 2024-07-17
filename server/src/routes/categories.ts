import express from 'express';
import { getCategoryFood } from '../controllers';

const router = express.Router();

router.get('/food', getCategoryFood);

export default router;
