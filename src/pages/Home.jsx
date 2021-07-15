// Import React
import React from "react";

// React Router
import { Link } from "react-router-dom";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Content, Button, StyledLink } from "../styles";

// Import Images
import shiba from "../assets/images/illustrations/shiba.png";

export const Home = () => {
	return (
		<Section>
			<HomeContent>
				<div>
					<Title>
						Dog.
						<span>io</span>
					</Title>
					<Subtitle>Vind de trouwe viervoeter die bij je past!</Subtitle>
				</div>
				<img src={shiba} alt="shiba-inu" />
				<Button>
					<GetStartedLink to="/overview">Get started</GetStartedLink>
				</Button>
			</HomeContent>
		</Section>
	);
};

// Styled Components

const HomeContent = styled(Content)`
	justify-content: space-around;
	align-items: center;
	img {
		object-fit: contain;
		max-width: 1000px;
	}
`;

const Title = styled.h1`
	font-size: 6rem;
	text-align: center;
	margin-bottom: 0.5rem;
	span {
		color: ${(props) => props.theme.colors.secundaryColor};
	}
`;

const Subtitle = styled.p`
	padding: 1rem 0rem;
	font-size: 1.3rem;
	text-align: center;
`;

const GetStartedLink = styled(StyledLink)`
	font-size: 1rem;
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
`;
