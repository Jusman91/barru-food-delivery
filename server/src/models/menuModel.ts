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
		inStock: {
			type: Boolean,
			default: true,
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
