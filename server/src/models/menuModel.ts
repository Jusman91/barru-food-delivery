import mongoose, { Schema } from 'mongoose';

const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		thumbnail: {
			type: String,
			required: true,
		},
		status: {
			type: Number,
			default: 1, // 1 = available, 0 = not available
		},
		restaurant: {
			type: Schema.Types.ObjectId,
			ref: 'restaurant',
		},
	},
	{ timestamps: true },
);

const Menu = mongoose.model('menu', menuSchema);

export default Menu;
