// Import React
import React from "react";

// Import React Icons
import {
	HiUser,
	HiSearch,
	HiHome,
	HiInformationCircle,
	HiChatAlt2,
} from "react-icons/hi";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Nav, StyledNavLink } from "../styles";

// Authentication
import { useAuth } from "../hooks/useAuth";

export const Navigation = () => {
	const { user } = useAuth();
	return (
		<>
			{user && (
				<Nav>
					<StyledNavLink to="/overview" exact activeClassName="current">
						<HiSearch className="navlink-icon" />
						<span className="navlink-text">Overview</span>
					</StyledNavLink>
					<StyledNavLink to="/" exact activeClassName="current">
						<HiHome className="navlink-icon" />
						<span className="navlink-text">Home</span>
					</StyledNavLink>
					<StyledNavLink to="/about" exact activeClassName="current">
						<HiInformationCircle className="navlink-icon" />
						<span className="navlink-text">About</span>
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
