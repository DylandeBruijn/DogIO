// React
import React from "react";

// React Router
import { NavLink } from "react-router-dom";

// React Icons
import {
	HiUser,
	HiSearch,
	HiHome,
	HiInformationCircle,
	HiChatAlt2,
} from "react-icons/hi";

// Styled Components
import styled from "styled-components";

// Authentication
import { useAuth } from "../../hooks/useAuth";

export const Navigation = () => {
	const { user } = useAuth();
	return (
		<>
			{user && (
				<Nav>
					<StyledNavLink to="/" exact activeClassName="current">
						<HiHome className="navlink-icon" />
						<span className="navlink-text">Home</span>
					</StyledNavLink>
					<StyledNavLink to="/about" exact activeClassName="current">
						<HiInformationCircle className="navlink-icon" />
						<span className="navlink-text">About</span>
					</StyledNavLink>
					<StyledNavLink to="/overview" exact activeClassName="current">
						<HiSearch className="navlink-icon" />
						<span className="navlink-text">Overview</span>
					</StyledNavLink>
					<StyledNavLink to="/contact" exact activeClassName="current">
						<HiChatAlt2 className="navlink-icon" />
						<span className="navlink-text">Contact</span>
					</StyledNavLink>
					<StyledNavLink to="/profile" exact activeClassName="current">
						<HiUser className="navlink-icon" />
						<span className="navlink-text">Profile</span>
					</StyledNavLink>
				</Nav>
			)}
		</>
	);
};

// Styled Components

const Nav = styled.nav`
	display: flex;
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 8vh;
	box-shadow: 0 0 2px ${(props) => props.theme.colors.primaryColor};
	background-color: ${(props) => props.theme.colors.secundaryColor};
	@media (max-width: 600px) {
		height: 4vh;
	}
`;

const StyledNavLink = styled(NavLink)`
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
	border-top: 8px solid transparent;
	&.current {
		color: ${(props) => props.theme.colors.primaryColorDark};
		border-top: 8px solid ${(props) => props.theme.colors.primaryColor};
	}
	.navlink-icon {
		font-size: 3rem;
	}
	.navlink-text {
		font-size: 1.5rem;
		font-weight: 600;
		@media (max-width: 600px) {
			display: none;
		}
	}
`;
