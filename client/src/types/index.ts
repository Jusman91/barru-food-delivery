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
