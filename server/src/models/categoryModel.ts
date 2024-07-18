import mongoose from 'mongoose';

const categoryMenuSchema = new mongoose.Schema({
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

const CategoryMenu = mongoose.model(
	'category_menu',
	categoryMenuSchema,
);

// const saveCategoryMenu = async (data: any) => {
// 	try {
// 		for (const category of data) {
// 			const existingCategory = await CategoryMenu.findOne({
// 				name: category.name,
// 			});
// 			if (existingCategory) {
// 				await CategoryMenu.updateMany(
// 					{ name: category.name },
// 					category,
// 				);
// 				console.log(
// 					`Data category dengan nama ${category.name} berhasil diperbarui`,
// 				);
// 			} else {
// 				await CategoryMenu.create(category);
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

// saveCategoryMenu(dataCategories);

export default CategoryMenu;
