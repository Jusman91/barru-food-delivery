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

export function saveSelectedKeysInStorage(key: string) {
	sessionStorage.setItem(
		keys.SELECTED_KEYS,
		JSON.stringify([key]),
	);
}

export function getSelectedKeysInStorage() {
	const key =
		sessionStorage.getItem(keys.SELECTED_KEYS) || '["/"]';
	return key ? JSON.parse(key) : '["/"]';
}

export function clearStorage() {
	localStorage.clear();
}
