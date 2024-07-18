import * as Yup from 'yup';

export const restaurantValidationSchema =
	Yup.object().shape({
		name: Yup.string()
			.required('Name is required')
			.min(3, 'Name must be at least 3 characters')
			.max(50, 'Name cannot exceed 50 characters'),
		city: Yup.string().required('City is required'),
		address: Yup.string()
			.required('Address is required')
			.min(3, 'Address must be at least 3 characters')
			.max(200, 'Address cannot exceed 200 characters'),
		phone: Yup.string()
			.required('Contact is required')
			.matches(
				/^\+(\d{1,4}[- ]?)?\d{10,15}$/,
				'Invalid contact format',
			), // star with + and min 10, max 15 e.g. +6212345678988
		thumbnail: Yup.string().required(
			'Thumbnail is required',
		),
	});
