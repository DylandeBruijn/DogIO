// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Content, Button, StyledLink } from "../styles";

// Import Avatar
import avatar from "../assets/images/avatars/sergio.jpg";

export const Profile = () => {
	return (
		<Section>
			<TopBar>
				<div>
					<img src={avatar} alt="avatar" />
				</div>
			</TopBar>
			<ProfileContent>
				<h2>Profile Page</h2>
				<StyledLink to="/">Likes</StyledLink>
				<StyledLink to="/">Favorites</StyledLink>
				<StyledLink to="/">Upload</StyledLink>
				<StyledLink to="/">Tour</StyledLink>
				<StyledLink to="/">Settings</StyledLink>
				<Button type="button">Sign Out</Button>
			</ProfileContent>
		</Section>
	);
};

// Styled Components

const TopBar = styled.div`
	height: 10vh;
	background-color: ${(props) => props.theme.colors.secundaryColor};
	padding: 2rem 5rem;
	div {
		display: inline-block;
		position: relative;
		width: 200px;
		height: 200px;
		overflow: hidden;
		border-radius: 50%;
		img {
			width: auto;
			height: 100%;
			margin-left: -50px;
		}
	}
`;

const ProfileContent = styled(Content)`
	height: calc(90vh - 100px);
`;
