// Import Styled Components
import styled from "styled-components";

// React Router
import { Link } from "react-router-dom";

// UI

export const Section = styled.section`
	height: calc(100vh - 8vh);
	display: flex;
	@media (max-width: 1400px) {
		flex-direction: column;
	}
	@media (max-width: 600px) {
		padding-bottom: 50rem;
	}
`;

export const Header = styled.header`
	height: 100%;
	width: 50vw;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	padding: 8rem;
	@media (max-width: 1400px) {
		width: 100vw;
		height: 40%;
	}
`;

export const Content = styled.section`
	height: 100%;
	width: 50vw;
	display: flex;
	flex-direction: column;
	padding: 8rem;
	background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
	@media (max-width: 600px) {
		padding: 8rem 4rem;
	}
	@media (max-width: 1400px) {
		width: 100vw;
		height: 60%;
	}
`;

export const ContentTitle = styled.h2`
	font-size: 6rem;
	margin-bottom: 4rem;
`;

export const ContentSubtitle = styled.p`
	font-size: 2rem;
	font-weight: 600;
`;

export const Button = styled.button`
	padding: 1.4rem 6rem;
	width: fit-content;
	font-weight: 600;
	font-size: 1.4rem;
	cursor: pointer;
	border-radius: 4rem;
	border: none;
	background-color: ${(props) => props.theme.colors.primaryColor};
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
	transition: all 0.5s ease;
	&:hover {
		background-color: ${(props) => props.theme.colors.primaryColorDark};
	}
`;

export const Title = styled.h1`
	font-size: 16rem;
	margin-bottom: 1rem;
	text-align: center;
	span {
		color: ${(props) => props.theme.colors.secundaryColor};
	}
`;

export const Subtitle = styled.p`
	font-size: 2.5rem;
	text-align: center;
`;

export const StyledLink = styled(Link)`
	font-size: 1.8rem;
	color: ${(props) => props.theme.colors.primaryColor};
	font-weight: 600;
	text-decoration: none;
`;
// Onboarding

export const OnboardContent = styled(Content)`
	width: 100vw;
	height: 100vh;
	padding: 0;
	img {
		max-width: 1000px;
		object-fit: cover;
	}
`;

export const BrandingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 60vh;
`;

export const AuthenticationContainer = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 40vh;
	background-color: ${(props) => props.theme.colors.secundaryColor};
	border-top: 1rem solid ${(props) => props.theme.colors.primaryColor};
	padding: 4rem;
	margin: 0rem;
	h3 {
		font-size: 4rem;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

// Messages

export const ErrorMessage = styled.p`
	font-size: 2rem;
	color: red;
`;

export const SuccesMessage = styled(ErrorMessage)`
	color: green;
`;

// Form

export const Form = styled.form``;

export const Label = styled.label`
	color: ${(props) => props.theme.colors.primaryColor};
	font-size: 2rem;
	font-weight: 600;
`;

export const Input = styled.input`
	font-size: 1.3rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.primaryColor};
	background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
	padding: 1rem 1rem;
	margin: 1rem 0rem;
	border: 4px solid ${(props) => props.theme.colors.primaryColor};
	border-radius: 15px;
	caret-color: ${(props) => props.theme.colors.primaryColor};
`;

export const Submit = styled.input`
	padding: 1.4rem 6rem;
	width: fit-content;
	font-weight: 600;
	font-size: 1.4rem;
	cursor: pointer;
	border-radius: 4rem;
	border: none;
	background-color: ${(props) => props.theme.colors.primaryColor};
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
	transition: all 0.5s ease;
	&:hover {
		background-color: ${(props) => props.theme.colors.primaryColorDark};
	}
`;
