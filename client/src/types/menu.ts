export interface ISelectOptions {
	value: string;
	label: string;
}
export interface IMenu {
	name: string;
	description: string;
	price: number;
	category: string;
	thumbnail: string;
	status: number;
	restaurant_id: string;
}
export interface ICardMenuProps extends IMenu {}
export interface IOrderBtnProps {
	onClick: () => void;
}
export interface IInfoBtnProps extends IOrderBtnProps {}
