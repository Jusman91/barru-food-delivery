import { RequestHandler } from 'express';
import { validationBody } from '../../lib/utils';
import { Restaurant } from '../../models';

export const createRestaurant: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		await validationBody.restaurant(req.body);
		await Restaurant.create(req.body);
		res
			.status(201)
			.json({ message: 'Restaurant created successfully' });
	} catch (error) {
		next(error);
	}
};
