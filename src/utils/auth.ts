import { cookieParser } from '@/utils/common';

export const isAuthenticated = (cookie: string): boolean => {
	const cookies = cookieParser(cookie);
	return !!cookies.token;
};