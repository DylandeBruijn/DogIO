// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Layout Components
import {
	Section,
	Header,
	Content,
	ContentTitle,
	Form,
	Label,
	Input,
	Submit,
} from "../styles";

// Header Image
import HeaderImage from "../assets/images/headers/contact.jpg";

export const Contact = () => {
	return (
		<Section>
			<ContactHeader></ContactHeader>
			<Content>
				<ContentTitle>Contact</ContentTitle>
				<ContactForm>
					<div>
						<Label htmlFor="name">Name</Label>
						<ContactInput type="text" id="name" />
					</div>
					<div>
						<Label htmlFor="email">Email</Label>
						<ContactInput type="email" id="email" />
					</div>
					<div>
						<Label htmlFor="telephone">Telephone</Label>
						<ContactInput type="tel" id="telephone" />
					</div>
					<ContactSubmit type="submit" value="Contact" disabled={true} />
				</ContactForm>
			</Content>
		</Section>
	);
};

// Styled Components

const ContactHeader = styled(Header)`
	background-image: url(${HeaderImage});
`;

const ContactForm = styled(Form)`
	div {
		display: flex;
		flex-direction: column;
	}
`;

const ContactInput = styled(Input)`
	max-width: 50%;
`;

const ContactSubmit = styled(Submit)`
	margin-top: 4rem;
`;
