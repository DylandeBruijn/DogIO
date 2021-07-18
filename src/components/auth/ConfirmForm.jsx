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

// UI
import {
	Section,
	OnboardContent,
	BrandingContainer,
	AuthenticationContainer,
	Title,
	Subtitle,
	ErrorMessage,
	Label,
	Input,
	Submit,
} from "../../styles";

// SVG
import { Shiba } from "../../components/svg/Shiba";

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
		<Section>
			<OnboardContent>
				<BrandingContainer>
					<ConfirmShiba />
					<Title>
						Dog.
						<span>io</span>
					</Title>
					<Subtitle>Find your perfect furry four legged friend!</Subtitle>
				</BrandingContainer>
				{/* <img src={shiba} alt="shiba-inu" /> */}
				<AuthenticationContainer onSubmit={handleSubmit(onSubmit)}>
					<h3>Confirm</h3>
					<p>Fill in your email again to complete the registration!</p>
					{errors.email && (
						<ErrorMessage>Please enter valid email adress</ErrorMessage>
					)}
					<div>
						<LoginLabel htmlFor="email">Email</LoginLabel>
						<LoginInput id="email" {...register("email", { required: true })} />
					</div>
					<Submit type="submit" value="Confirm email" />
				</AuthenticationContainer>
			</OnboardContent>
		</Section>
	);
};

// Styled Components

const ConfirmShiba = styled(Shiba)`
	width: 10%;
`;

const LoginLabel = styled(Label)`
	font-size: 3rem;
`;

const LoginInput = styled(Input)`
	width: 40rem;
`;
