import {
	CARD_CONTACT,
	CARD_MENU,
	CLOCK,
	FIRE,
	HEROHOME,
} from '@/assets';
import { IImgHeroHomeObj } from '@/types';

export const imgHeroHomeObj: IImgHeroHomeObj[] = [
	{
		src: CLOCK,
		alt: 'clock',
		className:
			'w-12 h-12 md:w-20 md:h-20 absolute -left-6 -top-5',
	},
	{
		src: FIRE,
		alt: 'clock',
		className:
			'w-12 h-12 md:w-20 md:h-20 absolute right-5 -top-7 md:-top-10',
	},
	{
		src: HEROHOME,
		alt: 'Hero',
		className:
			'w-full h-full object-cover rounded-3xl md:rounded-[50px]',
	},
	{
		src: CARD_MENU,
		alt: 'Hero',
		className:
			'w-36 h-16 md:w-72 md:h-36 object-cover absolute right-3 -bottom-8 md:right-5 md:-bottom-16',
	},
	{
		src: CARD_CONTACT,
		alt: 'Hero',
		className:
			'w-32 h-10 md:w-64 md:h-20 object-cover absolute -left-10 md:-left-28 -bottom-0',
	},
];
