import { VITE_API_URL } from '@/env';
import axios from 'axios';
import {
	clearStorage,
	getAccessTokenInStorage,
} from '../utils/storage';

const axiosInstance = axios.create({
	baseURL: `${VITE_API_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInstance.interceptors.request.use((req) => {
	const accessToken = getAccessTokenInStorage();
	if (accessToken) {
		req.headers.Authorization = `Bearer ${accessToken}`;
	}
	return req;
});

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			clearStorage();
			window.location.href = '/auth/token_expired';
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;
