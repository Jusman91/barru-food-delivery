import { RequestHandler } from 'express';
import {
	isValidObjectId,
	validationBody,
} from '../../lib/utils';
import { Menu } from '../../models';
import { createError } from '../../middleware';

export const udpateMenu: RequestHandler = async (
	req,
	res,
	next,
) => {
	const { id } = req.params;
	try {
		if (!isValidObjectId(id))
			return next(createError(404, 'Menu not found'));
		await validationBody.menu(req.body);

		const updateMenu = await Menu.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true },
		);
		if (!updateMenu)
			return next(createError(404, 'Menu not found'));
		res
			.status(200)
			.json({ message: 'Menu update successfully' });
	} catch (error) {
		next(error);
	}
};
