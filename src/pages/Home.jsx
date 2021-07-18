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
				<GetStartedLink to="/overview">
					<Button>Get Started</Button>
				</GetStartedLink>
			</HomeContent>
		</Section>
	);
};

// Styled Components

const HomeContent = styled(OnboardContent)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	Button {
		margin-top: 4rem;
	}
`;

const HomeShiba = styled(Shiba)`
	width: 10%;
`;

const GetStartedLink = styled(StyledLink)`
	font-size: 1.4rem;
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
`;
