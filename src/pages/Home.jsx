// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Content, Title, Subtitle, Button } from "../styles";

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
				<Button>Get started</Button>
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
