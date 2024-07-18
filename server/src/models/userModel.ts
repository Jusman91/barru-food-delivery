import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: '',
		},
		role: {
			type: String,
			enum: [
				'customer',
				'restaurant_owner',
				'driver',
				'admin',
			],
			default: 'customer',
		},
	},
	{ timestamps: true },
);

const User = mongoose.model('user', userSchema);

export default User;
