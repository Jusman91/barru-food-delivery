import mongoose, { Schema } from 'mongoose';

const driverSchema = new mongoose.Schema(
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
		profilePic: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		subdistrict: {
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
		status: {
			type: Number,
			default: 1, // 1 = active, 0 = inactive
		},
		driver_id: { type: Schema.Types.ObjectId, ref: 'user' },
	},
	{ timestamps: true },
);

const Driver = mongoose.model('driver', driverSchema);

export default Driver;
