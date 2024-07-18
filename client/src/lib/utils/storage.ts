import { keys } from '@/types';

export function saveThemeToStorage(theme: string) {
	return localStorage.setItem(keys.THEME_STORAGE, theme);
}

export function getThemeInStorage() {
	return localStorage.getItem(keys.THEME_STORAGE);
}

export function saveAccessTokenToStorage(
	accessToken: string,
) {
	localStorage.setItem(
		keys.ACCESSTOKEN_STORAGE,
		JSON.stringify(accessToken),
	);
}

export function getAccessTokenInStorage() {
	const accessToken = localStorage.getItem(
		keys.ACCESSTOKEN_STORAGE,
	);

	return accessToken ? JSON.parse(accessToken) : '{}';
}

export function clearStorage() {
	localStorage.clear();
}
