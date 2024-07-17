import { RequestHandler } from 'express';
import { Food } from '../../models';

export const getFoods: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const foods = await Food.find();

		res.status(200).json(foods);
	} catch (error) {
		next(error);
	}
};
