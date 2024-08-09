import { ImgHTMLAttributes, ReactNode } from 'react';
export * from './user';
export * from './menu';
export * from './restaurant';
export * from './driver';
export * from './store';

export enum keys {
	THEME_STORAGE = 'theme_storage',
	ACCESSTOKEN_STORAGE = 'accessToken_storage',
	AUTHENTICATED_STORAGE = 'isAuthenticated_storage',
	USER_STORAGE = 'user_storage',
	REGISTER = 'register',
	LOGIN = 'login',
	LOGGEDIN = 'loggedin',
	FORGOT_PASSWORD = 'forgot_password',
	RESET_PASSWORD = 'reset_password',
	MENUS = 'menus',
	RESTAURANT = 'restaurant',
	DRIVER = 'driver',
	CATEGORIES = 'categories',
	PROFILE = 'profile',
	SELECTED_KEYS = 'selected_keys',
	SELECTED_CATEGORY_KEYS = 'selected_category_keys',
}

export interface IHeroProps {
	name:
		| 'home'
		| 'menus'
		| 'restaurants'
		| 'drivers'
		| 'about'
		| 'contact';
	img: string;
	textTop: string;
	textBottom: string;
}
export interface IErrorUseContext {
	context: unknown;
	message: string;
}
export interface IThemeContext {
	myTheme: string;
	toggleMyTheme: () => void;
}
export type ModalType = 'menu' | 'driver';
export interface IImageProps
	extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	className?: string;
}
export interface ISkeletonProps {
	width: number | string;
	height: number | string;
	borderRadius?: string;
}
export interface ICardServiceProps {
	src: string;
	alt: string;
	title: string;
	subTitle: string;
}
export interface IHeaderContent {
	title: string;
	subTitle: string;
	rootClassName?: string;
}
export interface IlistItem {
	key: string;
	label: string;
	icon?: ReactNode;
	children?: ReactNode;
}
export interface IImgHeroHomeObj {
	src: string;
	alt?: string;
	className?: string;
}
export interface ICardServiceObj
	extends ICardServiceProps {}
export interface IOpenNavlistBtnProps {
	onClick: () => void;
}
export interface ICloseNavlistBtnProps
	extends IOpenNavlistBtnProps {}
export interface ILoginBtn {
	onClick: () => void;
	className?: string;
}

export interface IListItemsFooter {
	label: string;
	path: string;
}
export interface IListItemsFooterProps {
	data: IListItemsFooter[];
	title: string;
}
