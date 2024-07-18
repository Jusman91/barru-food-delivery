import { RequestHandler } from 'express';
import { Menu } from '../../models';

export const getMenus: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const menus = await Menu.find();

		res.status(200).json(menus);
	} catch (error) {
		next(error);
	}
};
