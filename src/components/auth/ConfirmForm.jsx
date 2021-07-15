// React
import React from "react";

// React Router DOM
import { useHistory, useLocation } from "react-router-dom";

// Hook Form
import { useForm } from "react-hook-form";

// Use Authentication
import { useAuth } from "../../hooks/useAuth";

// Styled Components
import styled from "styled-components";

export const ConfirmForm = () => {
	const {
		handleSubmit,
		register,
		setError,
		formState: { errors },
	} = useForm();

	const { signInWithEmailLink } = useAuth();

	const history = useHistory();

	const location = useLocation();

	const onSubmit = async (data) => {
		try {
			await signInWithEmailLink(data.email, location.search);
			history.push("/");
		} catch (error) {
			setError("email", {
				type: "manual",
				message: error.message,
			});
		}
	};
	return (
		<section>
			<h3>Confirm Email</h3>
			{errors.email && (
				<div>
					<p>{errors.email.message}</p>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="email">Email</label>
				<input id="email" {...register("email", { required: true })} />
				<input type="submit" />
			</form>
		</section>
	);
};
