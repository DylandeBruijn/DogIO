// Import React
import React, { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Content, DogCard } from "../styles";

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
					`https://api.thedogapi.com/v1/breeds?limit=10`
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
					<DogCard key={dog.id}>
						<div>
							<img src={dog.image.url} alt="" />
						</div>
						<div>
							{" "}
							<h3>{dog.name}</h3>
							<p>{dog.bred_for}</p>
							<p>{dog.breed_group}</p>
						</div>
					</DogCard>
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
