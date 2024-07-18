import { RequestHandler } from 'express';
import {
	isValidObjectId,
	validationBody,
} from '../../lib/utils';
import { User } from '../../models';
import { createError } from '../../middleware';

export const udpateUser: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'User not found'));
		await validationBody.user.register(req.body);

		const updateUser = await User.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true },
		);
		if (!updateUser)
			return next(createError(404, 'User not found'));
		res
			.status(200)
			.json({ message: 'User update successfully' });
	} catch (error) {
		next(error);
	}
};
