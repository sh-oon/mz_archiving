type Options = {
	headers?: {
		[key: string]: string;
	};
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	body?: string | FormData;
};

const HEADERS = {
	Accept: 'application/json',
};

async function customFetch(endpoint: string, options: Options = {}) {
	const BASE_URL = window.location.origin;
	// form-data 처리를 위해 타입은 정하지 않음
	const response = await fetch(`${BASE_URL}${endpoint}`, {
		headers :{
			'Access-Control-Allow-Methods': '*',
			...HEADERS,
			...options.headers,
		},
		...options,
	});

	if (!response.ok) {
		if (response.status === 500) {
			throw response;
		}
		return await response.json();
	}

	// 204, 205, 201은 성공으로 간주
	if (response.status === 205 || response.status === 204 || response.status === 201) {
		return { msg: 'success' };
	}

	return await response.json();
}

export default customFetch;
