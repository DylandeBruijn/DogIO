// Import Styled Components
import styled from "styled-components";

// Import React Router
import { NavLink, Link } from "react-router-dom";

// Import Pattern
import pattern from "./assets/images/patterns/dog-pattern.png";

// UI

export const Section = styled.section`
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
	background-image: url(${pattern});
	background-position: center center;
`;

export const Header = styled.header`
	height: 30vh;
	background-size: cover;
	background-position: center;
`;

export const Content = styled.section`
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	padding: 5rem;
`;

export const Title = styled.h1`
	font-size: 6rem;
	text-align: center;
	span {
		color: ${(props) => props.theme.colors.secundaryColor};
	}
`;

export const Subtitle = styled.p`
	padding: 3rem 0rem;
	font-size: 1.3rem;
	text-align: center;
`;

export const Button = styled.button`
	font-weight: 600;
	font-size: 1.1rem;
	margin: 3rem 0rem;
	padding: 1rem 4rem;
	max-width: fit-content;
	cursor: pointer;
	border-radius: 30px;
	border: none;
	background-color: ${(props) => props.theme.colors.primaryColor};
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
	transition: all 0.5s ease;
	&:hover {
		background-color: ${(props) => props.theme.colors.primaryColorDark};
	}
`;

// Navigation

export const Nav = styled.nav`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 100px;
	box-shadow: 0 0 2px ${(props) => props.theme.colors.primaryColor};
	background-color: ${(props) => props.theme.colors.secundaryColor};
	display: flex;
	overflow-x: auto;
`;

export const StyledNavLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	min-width: 50px;
	overflow: hidden;
	white-space: nowrap;
	color: ${(props) => props.theme.colors.primaryColor};
	text-decoration: none;
	transition: background-color 0.1s ease-in-out;
	border-top: 4px solid transparent;
	&.current {
		color: ${(props) => props.theme.colors.primaryColorDark};
		border-top: 4px solid ${(props) => props.theme.colors.primaryColor};
	}
	.navlink-icon {
		font-size: 2rem;
	}
	.navlink-text {
		font-size: 1.5rem;
		font-weight: 600;
	}
`;

export const StyledLink = styled(Link)`
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primaryColor};
	font-weight: 600;
	text-decoration: none;
`;

// Form

export const Form = styled.form`
	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 2rem;
		label {
			color: ${(props) => props.theme.colors.primaryColor};
			font-size: 1.1rem;
			font-weight: 600;
		}
		input {
			font-weight: 600;
			color: ${(props) => props.theme.colors.primaryColor};
			padding: 1rem 1rem;
			margin: 1rem 0rem;
			border: 4px solid ${(props) => props.theme.colors.primaryColor};
			border-radius: 15px;
			max-width: 500px;
			caret-color: ${(props) => props.theme.colors.primaryColor};
		}
	}
	input[type="submit"] {
		font-weight: 600;
		font-size: 1.1rem;
		padding: 1rem 4rem;
		margin: 1rem 0rem;
		max-width: fit-content;
		cursor: pointer;
		border-radius: 30px;
		border: none;
		background-color: ${(props) => props.theme.colors.primaryColor};
		color: ${(props) => props.theme.colors.primaryBackgroundColor};
		transition: all 0.5s ease;
		&:hover {
			background-color: ${(props) => props.theme.colors.primaryColorDark};
		}
	}
`;

// Api Card

export const DogCard = styled.article`
	padding: 3rem;
	border: 4px solid red;
	margin: 2rem 0rem;
`;
