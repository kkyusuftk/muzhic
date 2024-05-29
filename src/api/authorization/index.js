import codeChallenge from "./codeChallenge";
import codeVerifier from "./codeVerifier";
import SCOPES from "./scope";

const triggerAuthorizationFlow = () => {
	const clientId = import.meta.env.VITE_CLIENT_ID;
	const redirectUri = import.meta.env.VITE_REDIRECT_URL;

	const scope = SCOPES.join(" ");
	const authUrl = new URL(import.meta.env.VITE_SHOPIFY_AUTHORIZATION_URL);

	window.localStorage.setItem("code_verifier", codeVerifier);

	const params = {
		response_type: "code",
		client_id: clientId,
		scope,
		code_challenge_method: "S256",
		code_challenge: codeChallenge,
		redirect_uri: redirectUri,
	};

	authUrl.search = new URLSearchParams(params).toString();
	window.location.href = authUrl.toString();
};

export default triggerAuthorizationFlow;
