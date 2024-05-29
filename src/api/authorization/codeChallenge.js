/**
 * Code challenge directly copied from
 * https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow
 */

import codeVerifier from "./codeVerifier";

const sha256 = async (plain) => {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
	return btoa(String.fromCharCode(...new Uint8Array(input)))
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
};

const hashed = await sha256(codeVerifier);
const codeChallenge = base64encode(hashed);

export default codeChallenge;
