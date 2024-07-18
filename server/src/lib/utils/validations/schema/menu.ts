import * as Yup from 'yup';

export const menuValidationSchema = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(50, 'Name cannot exceed 50 characters'),
	price: Yup.number().required('Price is required'),
	category: Yup.string().required('Category is required'),
	description: Yup.string()
		.required('Description is required')
		.max(300, 'Description cannot exceed 200 characters'),
	thumbnail: Yup.string().required('Thumbnail is required'),
});
