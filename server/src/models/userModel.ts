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
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: '',
		},
		phone: {
			type: String,
			required: true,
			unique: true,
		},
		role: {
			type: String,
			enum: [
				'customer',
				'restaurant_owner',
				'delivery_person',
				'admin',
			],
			default: 'customer',
		},
	},
	{ timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
