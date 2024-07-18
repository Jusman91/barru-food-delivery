import { RequestHandler } from 'express';
import {
	isValidObjectId,
	validationBody,
} from '../../lib/utils';
import { Driver } from '../../models';
import { createError } from '../../middleware';

export const udpateDriver: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Driver not found'));
		await validationBody.driver(req.body);

		const updateDriver = await Driver.findOneAndUpdate(
			{ driver_id: id },
			{ $set: req.body },
			{ new: true },
		);
		if (!updateDriver)
			return next(createError(404, 'Driver not found'));
		res
			.status(200)
			.json({ message: 'Driver update successfully' });
	} catch (error) {
		next(error);
	}
};
