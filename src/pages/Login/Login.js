// React

import React from "react";

// React Hookform

import { useForm } from "react-hook-form";

// useHistory

import { useHistory } from "react-router-dom";

// CSS

import styles from "./Login.module.scss";

// Logo

import logo from "../../assets/illustrations/shiba.png";

const Login = ({ toggleIsAuthenticated }) => {
	// Hookform

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	// History

	let history = useHistory();

	// signIn Handler

	function signIn() {
		toggleIsAuthenticated(true);
		history.push("/");
	}

	return (
		<section className={styles["Page"]}>
			<div className={styles["Page__opener"]}>
				<h1 className={styles["Page__opener__title"]}>Dog.io</h1>
				<h2 className={styles["Page__opener__subtitle"]}>
					Vind de trouwe viervoeter die bij je past!
				</h2>
				<img
					className={styles["Page__opener__logo"]}
					src={logo}
					alt="shiba-inu"
				/>
			</div>
			<div className={styles["Page__login"]}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						className={styles["Page__login__input"]}
						type="text"
						placeholder="Username"
						{...register("Username", { required: true, maxLength: 80 })}
					/>
					<input
						className={styles["Page__login__input"]}
						type="text"
						placeholder="Password"
						{...register("Password", { required: true, maxLength: 100 })}
					/>

					<input
						className={styles["Page__login__submit"]}
						type="submit"
						onClick={signIn}
					/>
				</form>
			</div>
		</section>
	);
};

export default Login;
