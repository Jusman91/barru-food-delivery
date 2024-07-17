import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema(
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
	},
	{ timestamps: true },
);

const Food = mongoose.model('food', foodSchema);

export default Food;
