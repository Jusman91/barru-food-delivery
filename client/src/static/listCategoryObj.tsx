import {
	CATEGORY_CRAB,
	CATEGORY_CUTTLEFISH,
	CATEGORY_FISH,
	CATEGORY_LOBSTER,
	CATEGORY_OCTOPUS,
	CATEGORY_OYSTER,
	CATEGORY_SEAGRAPES,
	CATEGORY_SHRIMP,
	CATEGORY_SQUID,
} from '@/assets';
import { Image } from '@/components';
import { IlistItem } from '@/types';

export const listCategoryObj: IlistItem[] = [
	{
		key: 'ikan',
		label: 'Ikan',
		icon: (
			<Image
				src={CATEGORY_FISH}
				alt='Category Fish'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'udang',
		label: 'Udang',
		icon: (
			<Image
				src={CATEGORY_SHRIMP}
				alt='Category Shrimp'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'cumi',
		label: 'Cumi',
		icon: (
			<Image
				src={CATEGORY_SQUID}
				alt='Category Squid'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'kepiting',
		label: 'Kepiting',
		icon: (
			<Image
				src={CATEGORY_CRAB}
				alt='Category Crab'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'lobster',
		label: 'Lobster',
		icon: (
			<Image
				src={CATEGORY_LOBSTER}
				alt='Category Lobster'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'sotong',
		label: 'Sotong',
		icon: (
			<Image
				src={CATEGORY_CUTTLEFISH}
				alt='Category Cuttlefish'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'gurita',
		label: 'Gurita',
		icon: (
			<Image
				src={CATEGORY_OCTOPUS}
				alt='Category Octopus'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'kerang',
		label: 'Kerang',
		icon: (
			<Image
				src={CATEGORY_OYSTER}
				alt='Category Oyster'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
	{
		key: 'anggur_laut',
		label: 'Anggur Laut',
		icon: (
			<Image
				src={CATEGORY_SEAGRAPES}
				alt='Category Seagrapes'
				className='w-8 h-8 object-cover rounded-full'
			/>
		),
	},
];
