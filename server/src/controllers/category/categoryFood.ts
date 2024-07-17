import { RequestHandler } from 'express';
import { CategoryFood } from '../../models';

export const getCategoryFood: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const categories = await CategoryFood.find();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};
