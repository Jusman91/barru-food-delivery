import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Restaurant } from '../../models';
import { createError } from '../../middleware';

export const deleteRestaurant: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Restaurant not found'));
		const existingRestaurant = await Restaurant.findById(
			id,
		);
		if (!existingRestaurant)
			return createError(404, 'Restaurant not found');

		await Restaurant.findByIdAndDelete(id);
		res
			.status(201)
			.json({ message: 'Restaurant deleted successfully' });
	} catch (error) {
		next(error);
	}
};
