// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Layout Components
import {
	Section,
	OnboardContent,
	Title,
	Subtitle,
	Button,
	StyledLink,
} from "../styles";

// SVG
import { Shiba } from "../components/svg/Shiba";

export const Home = () => {
	return (
		<Section>
			<HomeContent>
				<HomeShiba />
				<Title>
					Dog.
					<span>io</span>
				</Title>
				<Subtitle>Find your perfect furry four legged friend!</Subtitle>
				<StyledLink to="/overview">
					<Button>Get Started</Button>
				</StyledLink>
			</HomeContent>
		</Section>
	);
};

// Styled Components

const HomeContent = styled(OnboardContent)`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	Button {
		margin-top: 4rem;
	}
`;

const HomeShiba = styled(Shiba)`
	width: 25rem;
	@media (max-width: 1400px) {
		width: 30rem;
	}
	@media (max-width: 1024px) {
		width: 25rem;
	}
	@media (max-width: 600px) {
		width: 20rem;
	}
`;
