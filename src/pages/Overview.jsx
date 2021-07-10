// Import React
import React, { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import Styled Components
import styled from "styled-components";

// Import Helpers
import { dogUrl } from "../helpers/dogUrl";

// Import Layout Components
import { Section, Content, DogCard, StyledLink } from "../styles";

export const Overview = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState("");
	const [loading, toggleLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setError(false);
			toggleLoading(true);
			try {
				const response = await axios.get(
					`https://api.thedogapi.com/v1/breeds?limit=999`,
					{
						headers: {
							"X-API-KEY": "process.env.REACT_APP_API_KEY",
						},
					}
				);
				setData(response.data);
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
				<h2>Start Searching</h2>
				<p>More than a hundred different dog breeds</p>
				{error && <span>Oeps er is iets fout gegaan!</span>}
				{loading && <span>Loading...</span>}
				{data?.map((dog) => (
					<StyledLink key={dog.id} to={`/overview/${dogUrl(dog.name)}`}>
						<DogCard>
							<img className="dog-image" src={dog.image.url} alt="" />
							<div className="dog-body">
								<h3 className="dog-name">{dog.name}</h3>
								<div className="dog-information">
									<div className="weight">
										<h4>Weight</h4>
										<p>{dog.weight.metric} kg</p>
									</div>
									<div className="height">
										<h4>Height</h4>
										<p>{dog.height.metric} cm</p>
									</div>
									<div className="life-span">
										<h4>Life Span</h4>
										<p>{dog.life_span}</p>
									</div>
								</div>
							</div>
						</DogCard>
					</StyledLink>
				))}
			</OverviewContent>
		</OverviewSection>
	);
};

// Styled Components

const OverviewSection = styled(Section)`
	height: auto;
	margin-bottom: 5rem;
`;

const OverviewContent = styled(Content)`
	height: auto;
`;
