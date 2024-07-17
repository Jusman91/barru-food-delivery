import mongoose from 'mongoose';

const categoryFoodSchema = new mongoose.Schema({
	name: String,
});

const dataCategories = [
	{ name: 'ikan' },
	{ name: 'udang' },
	{ name: 'cumi-cumi' },
	{ name: 'kepiting' },
	{ name: 'lobster' },
	{ name: 'sotong' },
	{ name: 'gurita' },
	{ name: 'kerang' },
	{ name: 'rumput laut' },
	{ name: 'bakar' },
	{ name: 'rebus' },
	{ name: 'kukus' },
	{ name: 'panggang' },
	{ name: 'asap' },
	{ name: 'tumis' },
];

const CategoryFood = mongoose.model(
	'category_food',
	categoryFoodSchema,
);

// const saveCategoryFood = async (data: any) => {
// 	try {
// 		for (const category of data) {
// 			const existingCategory = await CategoryFood.findOne({
// 				name: category.name,
// 			});
// 			if (existingCategory) {
// 				await CategoryFood.updateMany(
// 					{ name: category.name },
// 					category,
// 				);
// 				console.log(
// 					`Data category dengan nama ${category.name} berhasil diperbarui`,
// 				);
// 			} else {
// 				await CategoryFood.create(category);
// 				console.log(
// 					`Data category dengan nama ${category.name} berhasil disimpan`,
// 				);
// 			}
// 		}
// 	} catch (error) {
// 		console.error(
// 			'Terjadi kesalahan saat menyimpan data categories:',
// 			error,
// 		);
// 	}
// };

// saveCategoryFood(dataCategories);

export default CategoryFood;
