// React
import React from "react";

// Hook Form
import { useForm } from "react-hook-form";

// Use Authentication
import { useAuth } from "../../hooks/useAuth";

// Styled Components
import styled from "styled-components";

export const LoginForm = () => {
	const {
		handleSubmit,
		register,
		formState,
		setError,
		formState: { errors },
	} = useForm();

	const { sendSignInLinkToEmail } = useAuth();

	const onSubmit = async (data) => {
		try {
			await sendSignInLinkToEmail(data.email);
		} catch (error) {
			setError("email", {
				type: "manual",
				message: error.message,
			});
		}
	};
	return (
		<section>
			<h3>Login</h3>
			{errors.email && (
				<div>
					<p>{errors.email.message}</p>
				</div>
			)}
			{formState.isSubmitSuccessful && (
				<div>
					<p>Check your email to complete login!</p>
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
