// Import React
import React from "react";

// Import React Icons
import { HiLocationMarker, HiMail, HiDeviceMobile } from "react-icons/hi";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Header, Content, Button, ContentTitle } from "../styles";

// Import Header Image
import HeaderImage from "../assets/images/headers/about.jpg";

export const About = () => {
	return (
		<Section>
			<AboutHeader></AboutHeader>
			<AboutContent>
				<ContentTitle>About</ContentTitle>
				<p>
					DogIO helps you find your perfect furry four legged friend! Use our
					user friendly search function to match with all kinds of dogs. Do you
					have suggestions or questions? Don't hesitate to contact us! We
					respond as quickly as possible.
				</p>
				<ContactInformation>
					<div>
						<HiLocationMarker className="information-icon" />
						<span>Ginnekenstraat 112C</span>
					</div>
					<div>
						<HiMail className="information-icon" />
						<span>dylandebruyn1993@gmail.com</span>
					</div>
					<div>
						<HiDeviceMobile className="information-icon" />
						<span>0610642044</span>
					</div>
				</ContactInformation>
				<Button>Contact</Button>
			</AboutContent>
		</Section>
	);
};

// Styled Components

const AboutHeader = styled(Header)`
	background-image: url(${HeaderImage});
`;

const AboutContent = styled(Content)`
	height: calc(70vh - 100px);
`;

const ContactInformation = styled.div`
	div {
		display: flex;
		align-items: center;
		font-size: 1.1rem;
		font-weight: 600;
		color: ${(props) => props.theme.colors.primaryColor};
		.information-icon {
			margin-right: 1.1rem;
		}
	}
`;
