// React
import React from "react";

// React Icons
import { HiLocationMarker, HiMail, HiDeviceMobile } from "react-icons/hi";

// Styled Components
import styled from "styled-components";

// Layout Components
import {
	Section,
	Header,
	Content,
	Button,
	ContentTitle,
	StyledLink,
} from "../styles";

// Header Image
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
				<StyledLink to="/contact">
					<Button>Contact</Button>
				</StyledLink>
			</AboutContent>
		</Section>
	);
};

// Styled Components

const AboutHeader = styled(Header)`
	background-image: url(${HeaderImage});
`;

const AboutContent = styled(Content)`
	p {
		margin-bottom: 4rem;
	}
`;

const ContactInformation = styled.div`
	margin-bottom: 4rem;
	div {
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-weight: 600;
		color: ${(props) => props.theme.colors.primaryColor};
		span {
			padding-left: 2rem;
		}
		.information-icon {
			margin: 2rem 0rem;
		}
	}
`;
