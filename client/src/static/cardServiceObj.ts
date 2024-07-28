import { DELIVERY, ORDER, QUALIY } from '@/assets';
import { ICardServiceObj } from '@/types';

export const cardServiceObj: ICardServiceObj[] = [
	{
		src: ORDER,
		alt: 'Easy Order',
		title: 'Mudah Dipesan',
		subTitle:
			'Anda hanya perlu beberapa langkah dalam memesan makanan',
	},
	{
		src: DELIVERY,
		alt: 'Fast Delivery',
		title: 'Pengiriman Cepat',
		subTitle:
			'Pengiriman yang selalu tepat waktu bahkan lebih cepat',
	},
	{
		src: QUALIY,
		alt: 'Best Quality',
		title: 'Kualitas Terbaik',
		subTitle:
			'Tidak hanya cepat bagi kami kualitas juga nomor satu',
	},
];
