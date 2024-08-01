import { MenuProps } from 'antd';
import { ReactNode } from 'react';

export interface IMenu {
	name: string;
	description: string;
	price: number;
	category: string;
	thumbnail: string;
	status: number;
	restaurant_id: string;
}
export interface IMenuListProps {
	data: IMenu[];
}
export interface ICarouselBtnProps {
	icon: ReactNode;
	onClick: () => void;
}
export interface ICardCarouselMenuProps extends IMenu {}
export interface IOrderBtnProps {
	onClick: () => void;
}
export interface IInfoBtnProps extends IOrderBtnProps {}
export interface ISelectOptions {
	value: string;
	label: string;
}
export interface ICategoryInHomeProps {
	onClick: MenuProps['onClick'] | (() => void);
	selectedKeys: string[];
}
export interface IMenuCategoryProps {
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
}
