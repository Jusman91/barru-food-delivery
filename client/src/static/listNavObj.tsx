import { Icon } from '@/components';
import { IListNavObj } from '@/types';
import { BiFoodMenu } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import {
	IoRestaurantOutline,
	IoHomeOutline,
} from 'react-icons/io5';
import { MdOutlineContacts } from 'react-icons/md';

export const listNavObj: IListNavObj[] = [
	{
		key: '/',
		label: 'Home',
		icon: (
			<Icon>
				<IoHomeOutline className='text-base	' />
			</Icon>
		),
	},
	{
		key: '/menus',
		label: 'Menus',
		icon: (
			<Icon>
				<BiFoodMenu className='text-base	' />
			</Icon>
		),
	},
	{
		key: '/restaurants',
		label: 'Restaurants',
		icon: (
			<Icon>
				<IoRestaurantOutline className='text-base	' />
			</Icon>
		),
	},
	{
		key: '/drivers',
		label: 'Drivers',
		icon: (
			<Icon>
				<CiDeliveryTruck className='text-base	' />
			</Icon>
		),
	},
	{
		key: '/about',
		label: 'About',
		icon: (
			<Icon>
				<IoMdInformationCircleOutline className='text-base	' />
			</Icon>
		),
	},
	{
		key: '/contact',
		label: 'Contact',
		icon: (
			<Icon>
				<MdOutlineContacts className='text-base	' />
			</Icon>
		),
	},
];
