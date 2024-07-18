import * as Yup from 'yup';

export const driverValidationSchema = Yup.object().shape({
	username: Yup.string()
		.min(3, 'Username must be at least 3 characters')
		.max(15, 'Username is up to 15 characters')
		.required('Username is required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Email is required'),
	phone: Yup.string()
		.required('Contact is required')
		.matches(
			/^\+(\d{1,4}[- ]?)?\d{10,15}$/,
			'Invalid contact format',
		), // star with + and min 10, max 15 e.g. +6212345678988
	profilePic: Yup.string().required(
		'ProfilePic is required',
	),
	age: Yup.number().required('Age is required'),
	city: Yup.string().required('City is required'),
	address: Yup.string()
		.required('Address is required')
		.min(3, 'Address must be at least 3 characters')
		.max(200, 'Address cannot exceed 200 characters'),
	vehicle: Yup.string().required('Vehicle is required'),
});
