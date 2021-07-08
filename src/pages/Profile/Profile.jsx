import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Profile.module.scss";

const Profile = ({ isAuthenticated, toggleIsAuthenticated }) => {
	const history = useHistory();

	function signOut() {
		toggleIsAuthenticated(false);
		history.push("/");
	}

	return (
		<section className={styles.test}>
			<h1>Profile Page</h1>
			{isAuthenticated === true && (
				<button type="button" onClick={signOut}>
					Sign Out
				</button>
			)}
		</section>
	);
};

export default Profile;
