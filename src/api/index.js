/**
 * Custom get request with auto header injection for
 * authenticated requests
 * @param url {string}
 * @returns {Promise<unknown>}
 */
export const getRequestWithHeaders = (url) => {
	return fetch(url, {
		method: "GET",
		headers: {
			authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			accept: "application/json",
		},
	});
};

/**
 * Custom post request with auto header injection for
 * authenticated request
 * @param url {string}
 * @param body {object}
 * @returns {Promise<unknown>}
 */
export const postRequestWithHeaders = (url, body) => {
	const stringifiedBody = JSON.stringify(body);
	return fetch(url, {
		method: "GET",
		body: stringifiedBody,
		headers: {
			authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
			accept: "application/json",
		},
	});
};
