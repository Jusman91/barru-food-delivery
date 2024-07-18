import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Menu } from '../../models';
import { createError } from '../../middleware';

export const getMenu: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Menu not found'));

		const menu = await Menu.findById(id);

		if (!menu) return createError(404, 'Menu not found');

		res.status(200).json(menu);
	} catch (error) {
		next(error);
	}
};
