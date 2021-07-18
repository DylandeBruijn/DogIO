// React
import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Styled Components
import styled from "styled-components";

// Layout Components
import { Section, Content, ContentTitle, ContentSubtitle } from "../styles";

// Components
import { SearchBar } from "../components/SearchBar";
import { DogGrid } from "../components/DogGrid";

export const Overview = () => {
	// API State
	const [dogs, setDogs] = useState([]);
	const [filteredDogs, setFilteredDogs] = useState(dogs);
	const [loading, toggleLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSearch = (event) => {
		let value = event.target.value.toLowerCase();
		let result = [];
		result = dogs.filter((dog) => {
			return dog.name.toLowerCase().search(value) !== -1;
		});
		setFilteredDogs(result);
	};

	// API Call
	useEffect(() => {
		const fetchDogs = async () => {
			setError(false);
			toggleLoading(true);
			try {
				const response = await axios.get(
					`https://api.thedogapi.com/v1/breeds`,
					{
						headers: {
							"X-API-KEY": "process.env.REACT_APP_API_KEY",
						},
					}
				);
				setDogs(response.data);
				setFilteredDogs(response.data);
			} catch (e) {
				console.error(e);
				setError(true);
			}
			toggleLoading(false);
		};
		fetchDogs();
	}, []);

	return (
		<OverviewSection>
			<OverviewContent>
				<ContentTitle>Start Searching</ContentTitle>
				<ContentSubtitle>
					More than a hundred different dog breeds
				</ContentSubtitle>
				<SearchBar handleSearch={handleSearch} />
				<DogGrid filteredDogs={filteredDogs} loading={loading} error={error} />
			</OverviewContent>
		</OverviewSection>
	);
};

// Styled Components

const OverviewSection = styled(Section)`
	display: block;
	height: 100%;
`;

const OverviewContent = styled(Content)`
	width: 100%;
	background-color: transparent;
`;
