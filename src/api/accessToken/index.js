const getToken = async (code) => {
  // stored in the previous step
  const codeVerifier = localStorage.getItem("code_verifier");

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch("https://accounts.spotify.com/api/token", payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
  return response;
};

export default getToken;
