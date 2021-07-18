// React
import React from "react";

// Hook Form
import { useForm } from "react-hook-form";

// Use Authentication
import { useAuth } from "../../hooks/useAuth";

// Styled Components
import styled from "styled-components";

// UI
import {
	Section,
	OnboardContent,
	BrandingContainer,
	AuthenticationContainer,
	Title,
	Subtitle,
	SuccesMessage,
	ErrorMessage,
	Label,
	Input,
	Submit,
} from "../../styles";

// SVG
import { Shiba } from "../../components/svg/Shiba";

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
		<>
			<Section>
				<OnboardContent>
					<BrandingContainer>
						<LoginShiba />
						<Title>
							Dog.
							<span>io</span>
						</Title>
						<Subtitle>Find your perfect furry four legged friend!</Subtitle>
					</BrandingContainer>
					{/* <img src={shiba} alt="shiba-inu" /> */}
					<AuthenticationContainer onSubmit={handleSubmit(onSubmit)}>
						<h3>Register</h3>
						<p>Fill in your email to receive a login link for Dog.io!</p>
						{errors.email && (
							<ErrorMessage>Please enter valid email adress</ErrorMessage>
						)}
						{formState.isSubmitSuccessful && (
							<SuccesMessage>Check your email to complete login!</SuccesMessage>
						)}
						<div>
							<LoginLabel htmlFor="email">Email</LoginLabel>
							<LoginInput
								id="email"
								{...register("email", { required: true })}
							/>
						</div>
						<Submit type="submit" value="Register email" />
					</AuthenticationContainer>
				</OnboardContent>
			</Section>
		</>
	);
};

// Styled Components

const LoginShiba = styled(Shiba)`
	width: 10%;
`;

const LoginLabel = styled(Label)`
	font-size: 3rem;
`;

const LoginInput = styled(Input)`
	width: 40rem;
`;
