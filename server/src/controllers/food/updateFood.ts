import mongoose from 'mongoose';
import { RequestHandler } from 'express';
import {
	isValidObjectId,
	validationBody,
} from '../../lib/utils';
import { Food } from '../../models';
import { createError } from '../../middleware';

export const udpateFood: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Food not found'));
		await validationBody.food(req.body);

		const updateFood = await Food.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true },
		);
		if (!updateFood)
			return next(createError(404, 'Food not found'));
		res
			.status(200)
			.json({ message: 'Food update successfully' });
	} catch (error) {
		next(error);
	}
};
