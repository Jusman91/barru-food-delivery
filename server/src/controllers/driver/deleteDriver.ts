import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Driver, User } from '../../models';
import { createError } from '../../middleware';

export const deleteDriver: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Driver not found'));

		const driver = await Driver.findOneAndDelete({
			driver_id: id,
		});
		if (!driver)
			return createError(404, 'Driver not found');

		const user = await User.findByIdAndDelete(id);
		if (!user)
			return next(createError(404, 'User not found'));

		res
			.status(201)
			.json({ message: 'Driver deleted successfully' });
	} catch (error) {
		next(error);
	}
};
