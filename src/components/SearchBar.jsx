// React
import React from "react";

// Styled Components
import styled from "styled-components";

export const SearchBar = ({ handleSearch }) => {
	return (
		<SearchContainer>
			<SearchInputs>
				<Search
					type="text"
					autoFocus
					placeholder="Search..."
					onChange={(event) => handleSearch(event)}
				/>
			</SearchInputs>
		</SearchContainer>
	);
};

const SearchContainer = styled.section`
	margin-bottom: 6rem;
`;

const SearchInputs = styled.div`
	margin-top: 3rem;
	display: flex;
	box-shadow: 0px 5px 50px
		${(props) => props.theme.colors.secundaryBackgroundColor};
`;

const Search = styled.input`
	background-color: white;
	color: ${(props) => props.theme.colors.darkTextColor};
	border: transparent;
	border-radius: 4rem;
	font-size: 1.8rem;
	padding: 1rem 2rem;
	height: 5rem;
	width: 100%;
	@media (max-width: 600px) {
		height: 10rem;
	}
`;
