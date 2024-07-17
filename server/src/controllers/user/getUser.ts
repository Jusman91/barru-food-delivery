import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { User } from '../../models';
import { createError } from '../../middleware';

export const getUser: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'User not found'));

		const user = await User.findById(id);

		if (!user) return createError(404, 'User not found');

		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
