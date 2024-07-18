import * as Yup from 'yup';
import { customValidationReqBody } from './customValidationReqBody';
import {
	driverValidationSchema,
	menuValidationSchema,
	restaurantValidationSchema,
	userValidationSchema,
} from './schema';

export const validationBody = {
	user: {
		register: customValidationReqBody(
			userValidationSchema(
				'register',
			) as unknown as Yup.ObjectSchema<any>,
		),
		login: customValidationReqBody(
			userValidationSchema(
				'login',
			) as unknown as Yup.ObjectSchema<any>,
		),
		forgotPassword: customValidationReqBody(
			userValidationSchema(
				'forgot-password',
			) as unknown as Yup.ObjectSchema<any>,
		),
		resetPassword: customValidationReqBody(
			userValidationSchema(
				'reset-password',
			) as unknown as Yup.ObjectSchema<any>,
		),
	},
	restaurant: customValidationReqBody(
		restaurantValidationSchema,
	),
	driver: customValidationReqBody(driverValidationSchema),
	menu: customValidationReqBody(menuValidationSchema),
};
