import * as Yup from 'yup';
import { UserValidationName } from '../../../../types';

export const userValidationSchema = (
	validationName: UserValidationName,
) => {
	let schema = {};
	switch (validationName) {
		case 'register':
			return (schema = Yup.object().shape({
				username: Yup.string()
					.min(3, 'Username must be at least 3 characters')
					.max(15, 'Username is up to 15 characters')
					.required('Username is required'),
				email: Yup.string()
					.email('Invalid email address')
					.required('Email is required'),
				password: Yup.string()
					.min(6, 'Password must be at least 6 characters')
					.required('password is required'),
				phone: Yup.string()
					.required('Contact is required')
					.matches(
						/^\+(\d{1,4}[- ]?)?\d{10,15}$/,
						'Invalid contact format',
					), // star with + and min 10, max 15 e.g. +6212345678988
				city: Yup.string().required('City is required'),
				address: Yup.string()
					.required('Address is required')
					.min(3, 'Address must be at least 3 characters')
					.max(200, 'Address cannot exceed 200 characters'),
			}));
		case 'login':
			return (schema = Yup.object().shape({
				email: Yup.string()
					.email('Invalid email address')
					.required('Email is required'),
				password: Yup.string().required(
					'Password is required',
				),
			}));
		case 'forgot-password':
			return (schema = Yup.object().shape({
				email: Yup.string()
					.email('Invalid email address')
					.required('Email is required'),
			}));
		case 'reset-password':
			return (schema = Yup.object().shape({
				password: Yup.string().required(
					'Password is required',
				),
			}));
		default:
			return schema;
	}
};
