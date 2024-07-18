import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Driver } from '../../models';
import { createError } from '../../middleware';

export const getDriver: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Driver not found'));

		const driver = await Driver.findOne({ driver_id: id });

		if (!driver)
			return createError(404, 'Driver not found');

		res.status(200).json(driver);
	} catch (error) {
		next(error);
	}
};
