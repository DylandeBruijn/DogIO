// useHistory

import { useHistory } from "react-router-dom";

// CSS

import styles from "./Login.module.scss";

const Login = ({ toggleIsAuthenticated }) => {
	let history = useHistory();

	function signIn() {
		toggleIsAuthenticated(true);
		history.push("/");
	}

	return (
		<section className={styles.test}>
			<h1>Login</h1>
			<p>Press the button to login!</p>
			<button type="button" onClick={signIn}>
				Login
			</button>
		</section>
	);
};

export default Login;
