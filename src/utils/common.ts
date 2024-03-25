export const cookieParser = (cookie: string): Record<string, string> => {
	const cookies = cookie.split(';');
	return cookies.reduce((acc: Record<string, string>, curr: string) => {
		const [key, value] = curr.split('=');
		acc[key.trim()] = value;
		return acc;
	}, {});
};