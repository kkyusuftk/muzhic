import styles from "./app.module.css";

function App() {
	console.log(import.meta.env);
	return <div className={styles.container}>Pitchure - The movies app</div>;
}

export default App;
