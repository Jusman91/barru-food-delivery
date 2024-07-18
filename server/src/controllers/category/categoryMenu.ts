import { RequestHandler } from 'express';
import { CategoryMenu } from '../../models';

export const getCategoryMenu: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const categories = await CategoryMenu.find();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};
