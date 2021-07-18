// React
import React from "react";

// Authentication
import { useAuth } from "../hooks/useAuth";

// Styled Components
import styled from "styled-components";

// Layout Components
import {
	Section,
	Header,
	Content,
	ContentTitle,
	StyledLink,
	Button,
} from "../styles";

// Header Image
import HeaderImage from "../assets/images/headers/profile.jpg";

export const Profile = () => {
	const { user, logout } = useAuth();

	return (
		<Section>
			<ProfileHeader></ProfileHeader>
			<ProfileContent>
				<ContentTitle>Profile Page</ContentTitle>
				<WelcomeMessage>Welcome, {user.email}!</WelcomeMessage>
				<ProfileLink to="/">Likes</ProfileLink>
				<ProfileLink to="/">Favorites</ProfileLink>
				<ProfileLink to="/">Upload</ProfileLink>
				<ProfileLink to="/">Tour</ProfileLink>
				<ProfileLink to="/">Settings</ProfileLink>
				<LogoutButton type="button" onClick={logout}>
					Logout
				</LogoutButton>
			</ProfileContent>
		</Section>
	);
};

// Styled Components

const ProfileHeader = styled(Header)`
	background-image: url(${HeaderImage});
	@media (max-width: 1400px) {
		width: 100vw;
		height: 10%;
	}
`;

const ProfileContent = styled(Content)`
	@media (max-width: 1400px) {
		width: 100vw;
		height: 90%;
	}
`;

const ProfileLink = styled(StyledLink)`
	font-size: 2rem;
	padding: 1rem 0rem;
`;

const WelcomeMessage = styled.p`
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 4rem;
	color: ${(props) => props.theme.colors.secundaryColor};
`;

const LogoutButton = styled(Button)`
	margin-top: 4rem;
`;
