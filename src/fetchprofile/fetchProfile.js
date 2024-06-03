export default async function fetchProfile(token) {
	console.log(token);
	const result = await fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await result.json();

	return data;
}
