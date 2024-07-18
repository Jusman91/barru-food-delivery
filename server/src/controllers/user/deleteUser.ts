import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Driver, User } from '../../models';
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

		const user = await User.findByIdAndDelete(id);
		if (!user)
			return next(createError(404, 'User not found'));

		if (user.role === 'driver') {
			await Driver.findOneAndDelete({
				driver_id: id,
			});
		}

		await User.findByIdAndDelete(id);
		res
			.status(201)
			.json({ message: 'User deleted successfully' });
	} catch (error) {
		next(error);
	}
};
