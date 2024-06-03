import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getToken from "../../api/accessToken";
import useAuthStore from "../../store/auth";

let tokenFetchApiCalled = false;

export const Callback = () => {
	const { setAccessToken } = useAuthStore();
	const navigate = useNavigate();

	const fetchToken = async () => {
		tokenFetchApiCalled = true;
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get("code");
		const data = await getToken(code);
		setAccessToken(data.access_token);
		navigate("/");
	};

	useEffect(() => {
		if (!tokenFetchApiCalled) {
			fetchToken();
		}
	}, [fetchToken]);

	return <div>Callback</div>;
};
