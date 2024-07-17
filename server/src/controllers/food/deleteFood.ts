import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Food } from '../../models';
import { createError } from '../../middleware';

export const deleteFood: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Food not found'));
		const existingFood = await Food.findById(id);
		if (!existingFood)
			return createError(404, 'Food not found');

		await Food.findByIdAndDelete(id);
		res
			.status(201)
			.json({ message: 'Food deleted successfully' });
	} catch (error) {
		next(error);
	}
};
