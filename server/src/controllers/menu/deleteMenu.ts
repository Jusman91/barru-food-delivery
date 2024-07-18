import { RequestHandler } from 'express';
import { isValidObjectId } from '../../lib/utils';
import { Menu } from '../../models';
import { createError } from '../../middleware';

export const deleteMenu: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Menu not found'));
		const existingMenu = await Menu.findById(id);
		if (!existingMenu)
			return createError(404, 'Menu not found');

		await Menu.findByIdAndDelete(id);
		res
			.status(201)
			.json({ message: 'Menu deleted successfully' });
	} catch (error) {
		next(error);
	}
};
