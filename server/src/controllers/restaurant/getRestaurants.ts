import { RequestHandler } from 'express';
import { Restaurant } from '../../models';

export const getRestaurants: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const restaurants = await Restaurant.find();

		res.status(200).json(restaurants);
	} catch (error) {
		next(error);
	}
};
