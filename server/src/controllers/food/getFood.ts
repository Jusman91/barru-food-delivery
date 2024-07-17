import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Food } from '../../models';
import { createError } from '../../middleware';

export const getFood: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Food not found'));

		const food = await Food.findById(id);

		if (!food) return createError(404, 'Food not found');

		res.status(200).json(food);
	} catch (error) {
		next(error);
	}
};
