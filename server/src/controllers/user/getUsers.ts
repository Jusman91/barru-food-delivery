import { RequestHandler } from 'express';
import { User } from '../../models';

export const getUsers: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};
