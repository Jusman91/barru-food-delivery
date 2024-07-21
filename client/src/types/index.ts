import { Key, ReactNode } from 'react';

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
}

// <context>
export interface IErrorUseContext {
	context: unknown;
	message: string;
}
export interface IThemeContext {
	myTheme: string;
	toggleMyTheme: () => void;
}
// <context/>

export interface IconProps {
	className?: string;
	children: ReactNode;
}

// <navigation>
export interface IListNavObj {
	key: Key;
	label: ReactNode;
	icon?: ReactNode;
	children?: IListNavObj[];
}
export interface IlistNav extends IListNavObj {}
export interface IBtnMobile {
	icon: ReactNode;
	onClick: () => void;
	className?: string;
}
export interface IBtnLogin {
	onClick: () => void;
	className?: string;
}
// <navigation/>
