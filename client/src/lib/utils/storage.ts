import { keys } from '@/types';

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
