import express from 'express';
import { getCategoryMenu } from '../controllers';

const router = express.Router();

router.get('/menu', getCategoryMenu);

export default router;
