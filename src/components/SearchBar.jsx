// React
import React, { useState } from "react";

// Styled Components
import styled from "styled-components";

// Icons
import { HiSearch } from "react-icons/hi";

export const SearchBar = ({ handleSearch }) => {
	const doSearch = () => {};

	const keyPressCheck = (event) => {
		if (event.keyCode === 13) {
		}
	};
	return (
		<SearchContainer>
			<SearchInputs>
				<Search
					type="text"
					autoFocus
					placeholder="Search..."
					onChange={(event) => handleSearch(event)}
					onKeyUp={keyPressCheck}
				/>
				<SearchIcon>
					<HiSearch onClick={doSearch} />
				</SearchIcon>
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
	color: ${(props) => props.theme.colors.textColor};
	border: 0;
	border-radius: 4rem;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	font-size: 1.8rem;
	padding: 1rem 2rem;
	height: 5rem;
	width: 100%;
`;

const SearchIcon = styled.div`
	background-color: white;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	height: 5rem;
	width: 6rem;
	display: grid;
	place-items: center;
	svg {
		font-size: 35px;
		color: ${(props) => props.theme.colors.primaryColor};
		cursor: pointer;
	}
`;
