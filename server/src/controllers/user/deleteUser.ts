import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { User } from '../../models';
import { createError } from '../../middleware';

export const deleteUser: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'User not found'));
		const existingUser = await User.findById(id);
		if (!existingUser)
			return createError(404, 'User not found');

		await User.findByIdAndDelete(id);
		res
			.status(201)
			.json({ message: 'User deleted successfully' });
	} catch (error) {
		next(error);
	}
};
