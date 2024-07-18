import { RequestHandler } from 'express';
import { validationBody } from '../../lib/utils';
import { Menu } from '../../models';

export const createMenu: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		await validationBody.menu(req.body);
		await Menu.create(req.body);
		res
			.status(201)
			.json({ message: 'Menu created successfully' });
	} catch (error) {
		next(error);
	}
};
