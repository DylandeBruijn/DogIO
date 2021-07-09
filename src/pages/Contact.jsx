// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Header, Content, Form } from "../styles";

// Import Header Image
import HeaderImage from "../assets/images/headers/contact.jpg";

export const Contact = () => {
	return (
		<Section>
			<ContactHeader></ContactHeader>
			<ContactContent>
				<h2>Contact</h2>
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
					<input type="submit" value="Contact" />
				</Form>
			</ContactContent>
		</Section>
	);
};

// Styled Components

const ContactHeader = styled(Header)`
	background-image: url(${HeaderImage});
`;

const ContactContent = styled(Content)`
	height: calc(70vh - 100px);
`;
