import { RequestHandler } from 'express';
import { Driver } from '../../models';

export const getDrivers: RequestHandler = async (
	req,
	res,
	next,
) => {
	try {
		const drivers = await Driver.find();

		res.status(200).json(drivers);
	} catch (error) {
		next(error);
	}
};
