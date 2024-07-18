import { RequestHandler } from 'express';
import {
	encryptPassword,
	validationBody,
} from '../../lib/utils';
import { Driver, User } from '../../models';
import { createError } from '../../middleware';

export const createUser: RequestHandler = async (
	req,
	res,
	next,
) => {
	const {
		username,
		email,
		city,
		address,
		password,
		phone,
		role,
	} = req.body;
	try {
		await validationBody.user.register(req.body);
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return next(createError(400, 'Email already exists'));

		const hashedPassword = await encryptPassword(password);

		const user = new User({
			username,
			email,
			city,
			address,
			password: hashedPassword,
			phone,
			role,
		});

		await user.save();

		// If the user role is driver, create an entry in the driver collection
		if (role === 'driver') {
			const driver = new Driver({
				username,
				email,
				city,
				address,
				phone,
				driver_id: user._id,
			});

			await driver.save();
		}

		res
			.status(201)
			.json({ message: 'User created successfully' });
	} catch (error) {
		next(error);
	}
};
