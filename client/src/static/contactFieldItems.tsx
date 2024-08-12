import { FormItemProps, Input } from 'antd';

export const contactFieldItems: FormItemProps[] = [
	{
		name: 'name',
		required: true,
		// rules: validations.username,
		hasFeedback: true,
		children: (
			<Input
				style={{
					backgroundColor: 'transparent',
				}}
				className='contact-input border-t-0 border-x-0 rounded-none text-white focus-within:shadow-none'
				placeholder='Name'
			/>
		),
	},
	{
		name: 'email',
		required: true,
		// rules: validations.email,
		hasFeedback: true,
		children: (
			<Input
				style={{
					backgroundColor: 'transparent',
				}}
				className='contact-input border-t-0 border-x-0 rounded-none text-white focus-within:shadow-none'
				placeholder='Email address'
			/>
		),
	},
	{
		name: 'phone',
		required: true,
		// rules: validations.email,
		hasFeedback: true,
		children: (
			<Input
				style={{
					backgroundColor: 'transparent',
				}}
				className='contact-input border-t-0 border-x-0 rounded-none text-white focus-within:shadow-none'
				placeholder='Phone Number'
			/>
		),
	},
	{
		name: 'message',
		required: true,
		// rules: validations.email,
		hasFeedback: true,
		children: (
			<Input.TextArea
				autoSize={{
					minRows: 7,
					maxRows: 7,
				}}
				style={{
					backgroundColor: 'transparent',
				}}
				className='contact-input border-t-0 border-x-0 rounded-none text-white focus-within:shadow-none'
				placeholder='Tulis pesan di sini...'
			/>
		),
	},
];
