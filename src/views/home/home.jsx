import triggerAuthorizationFlow from "../../api/authorization";
import styles from "./home.module.css";

export const Home = () => {
	return (
		<div className={styles.container}>
			<div>Get started with Muzhic</div>
			<button type="button" onClick={triggerAuthorizationFlow}>
				Authorize
			</button>
		</div>
	);
};
