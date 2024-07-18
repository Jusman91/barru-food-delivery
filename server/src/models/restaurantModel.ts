import mongoose, { Schema } from 'mongoose';

const restaurantSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		owner_id: { type: Schema.Types.ObjectId, ref: 'user' },
		menus_id: [
			{ type: Schema.Types.ObjectId, ref: 'menu' },
		],
		status: {
			type: Number,
			default: 1, // 1 = active, 0 = inactive
		},
	},
	{ timestamps: true },
);

const Restaurant = mongoose.model(
	'restaurant',
	restaurantSchema,
);

export default Restaurant;
