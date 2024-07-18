import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Restaurant } from '../../models';
import { createError } from '../../middleware';

export const getRestaurant: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Restaurant not found'));

		const restaurant = await Restaurant.findById(id);

		if (!restaurant)
			return createError(404, 'Restaurant not found');

		res.status(200).json(restaurant);
	} catch (error) {
		next(error);
	}
};
