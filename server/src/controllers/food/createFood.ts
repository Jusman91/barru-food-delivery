import { RequestHandler } from 'express';
import { validationBody } from '../../lib/utils';
import { Food } from '../../models';

export const createFood: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		await validationBody.food(req.body);
		await Food.create(req.body);
		res
			.status(201)
			.json({ message: 'Food created successfully' });
	} catch (error) {
		next(error);
	}
};
