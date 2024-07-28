import { IlistItem } from '@/types';
import { BiFoodMenu } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import {
	IoRestaurantOutline,
	IoHomeOutline,
} from 'react-icons/io5';
import { MdOutlineContacts } from 'react-icons/md';
export const listNavObj: IlistItem[] = [
	{
		key: '/',
		label: 'Home',
		icon: <IoHomeOutline className='text-base	' />,
	},
	{
		key: '/menus',
		label: 'Menus',
		icon: <BiFoodMenu className='text-base	' />,
	},
	{
		key: '/restaurants',
		label: 'Restaurants',
		icon: <IoRestaurantOutline className='text-base	' />,
	},
	{
		key: '/drivers',
		label: 'Drivers',
		icon: <CiDeliveryTruck className='text-base	' />,
	},
	{
		key: '/about',
		label: 'About',
		icon: (
			<IoMdInformationCircleOutline className='text-base	' />
		),
	},
	{
		key: '/contact',
		label: 'Contact',
		icon: <MdOutlineContacts className='text-base	' />,
	},
];
