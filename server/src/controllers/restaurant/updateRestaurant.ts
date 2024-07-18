import { RequestHandler } from 'express';
import {
	isValidObjectId,
	validationBody,
} from '../../lib/utils';
import { Restaurant } from '../../models';
import { createError } from '../../middleware';

export const udpateRestaurant: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Restaurant not found'));
		await validationBody.restaurant(req.body);

		const updateRestaurant =
			await Restaurant.findByIdAndUpdate(
				id,
				{ $set: req.body },
				{ new: true },
			);
		if (!updateRestaurant)
			return next(createError(404, 'Restaurant not found'));
		res
			.status(200)
			.json({ message: 'Restaurant update successfully' });
	} catch (error) {
		next(error);
	}
};
