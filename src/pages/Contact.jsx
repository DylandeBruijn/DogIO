// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Layout Components
import { Section, Header, Content, Form, ContentTitle } from "../styles";

// Header Image
import HeaderImage from "../assets/images/headers/contact.jpg";

export const Contact = () => {
	return (
		<Section>
			<ContactHeader></ContactHeader>
			<Content>
				<ContentTitle>Contact</ContentTitle>
				<Form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" />
					</div>
					<div>
						<label htmlFor="telephone">Telephone</label>
						<input type="tel" id="telephone" />
					</div>
					<input type="submit" value="Contact" disabled={true} />
				</Form>
			</Content>
		</Section>
	);
};

// Styled Components

const ContactHeader = styled(Header)`
	background-image: url(${HeaderImage});
`;
