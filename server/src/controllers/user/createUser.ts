import { RequestHandler } from 'express';
import {
	encryptPassword,
	validationBody,
} from '../../lib/utils';
import { User } from '../../models';
import { createError } from '../../middleware';

export const createUser: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { username, email, password, phone, role } =
		req.body;
	try {
		await validationBody.user.register(req.body);
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return next(createError(400, 'Email already exists'));

		const hashedPassword = await encryptPassword(password);

		await User.create({
			username,
			email,
			password: hashedPassword,
			phone,
			role,
		});
		res
			.status(201)
			.json({ message: 'User created successfully' });
	} catch (error) {
		next(error);
	}
};
