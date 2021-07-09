// Import React
import React, { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Content } from "../styles";

export const Overview = () => {
	const [dogData, setDogData] = useState(null);
	const [error, setError] = useState("");
	const [loading, toggleLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setError(false);
			toggleLoading(true);
			try {
				const response = await axios.get(
					`https://api.thedogapi.com/v1/breeds?api_key=cb9794bd-ce01-481d-947a-b4e2c981c7c0`
				);
				setDogData(response.data);
				console.log(response.data);
			} catch (e) {
				console.error(e);
				setError(true);
			}
			toggleLoading(false);
		}
		fetchData();
	}, []);

	return (
		<OverviewSection>
			<OverviewContent>
				{error && <span>Oeps er is iets fout gegaan!</span>}
				{loading && <span>Loading...</span>}
				{dogData?.map((dog) => (
					<article key={dog.id}>
						<h3>{dog.name}</h3>
						<p>{dog.bred_for}</p>
						<p>{dog.breed_group}</p>
					</article>
				))}
			</OverviewContent>
		</OverviewSection>
	);
};

// Styled Components

const OverviewSection = styled(Section)`
	height: auto;
`;

const OverviewContent = styled(Content)`
	height: auto;
`;
