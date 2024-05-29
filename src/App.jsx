import { useEffect } from "react";
import { getRequestWithHeaders } from "./api";
import styles from "./app.module.css";

function App() {
	useEffect(() => {
		getRequestWithHeaders(
			"https://api.themoviedb.org/3/authentication/token/new",
		)
			.then((value) => value.json())
			.then((data) => console.log(data));
	}, []);
	return <div className={styles.container}>Pitchure - The movies app</div>;
}

export default App;
