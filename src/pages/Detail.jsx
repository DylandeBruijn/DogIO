// React
import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Styled Components
import styled from "styled-components";

// Params
import { useParams } from "react-router-dom";

// Layout Components
import { Section, Header, Content, Button, ContentTitle } from "../styles";

export const Detail = () => {
	// Params
	const dogName = useParams();
	console.log("useParams", dogName);

	// API State
	const [dog, setDog] = useState(null);
	const [error, setError] = useState("");
	const [loading, toggleLoading] = useState(false);

	// API Call
	useEffect(() => {
		async function loadDog() {
			setError(false);
			toggleLoading(true);
			try {
				const response = await axios.get(
					`https://api.thedogapi.com/v1/breeds/search?q=${dogName.id}`,
					{
						headers: {
							"X-API-KEY": "process.env.REACT_APP_API_KEY",
						},
					}
				);
				setDog(response.data[0]);
				console.log("Response: ", response.data[0]);
			} catch (e) {
				console.error(e);
				setError(true);
			}
			toggleLoading(false);
		}
		loadDog();
	}, []);

	// Computing
	const features = dog?.temperament.split(", ");
	const imgURL = `https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`;

	return (
		<DetailSection>
			<DetailHeader imgURL={imgURL}>
				<BackButton>Back</BackButton>
			</DetailHeader>
			<DetailContent>
				<ContentTitle>{dog?.name}</ContentTitle>
				<FeatureContainer>
					{features?.map((feature) => (
						<Feature>{feature}</Feature>
					))}
				</FeatureContainer>
				<InformationContainer>
					<div>
						<h3>Weight</h3>
						<div className="line"></div>
						<p>{dog?.weight.metric} kg</p>
					</div>
					<div>
						<h3>Length</h3>
						<div className="line"></div>
						<p>{dog?.height.metric} cm</p>
					</div>
					<div>
						<h3>Origin</h3>
						<div className="line"></div>
						<p>{dog?.origin}</p>
					</div>
					<div>
						<h3>Breed Group</h3>
						<div className="line"></div>
						<p>{dog?.breed_group}</p>
					</div>
				</InformationContainer>
			</DetailContent>
		</DetailSection>
	);
};

// Styled Components

const DetailSection = styled(Section)`
	display: flex;
	flex-direction: row;
	height: calc(100vh - 8vh);
	@media (max-width: 1400px) {
		flex-direction: column;
	}
	@media (max-width: 600px) {
		padding-bottom: 50rem;
	}
`;

const DetailHeader = styled(Header)`
	background: url(${(props) => props.imgURL});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	width: 50vw;
	height: 100%;
	padding: 8rem 24rem;
	@media (max-width: 1400px) {
		width: 100vw;
		height: 40vh;
	}
`;

const BackButton = styled(Button)`
	margin: 0;
`;

const DetailContent = styled(Content)`
	width: 50vw;
	margin: 0;
	height: 100%;
	padding: 8rem 24rem;
	@media (max-width: 1400px) {
		width: 100vw;
		height: 60vh;
	}
`;

const FeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-bottom: 8rem;
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: autofill;
	}
`;

const Feature = styled(Button)`
	font-size: 1.5rem;
	margin: 1rem 1rem 1rem 0rem;
	border-radius: 0;
`;

const InformationContainer = styled.div`
	div {
		margin-bottom: 4rem;
		h3 {
			font-size: 3rem;
		}
		.line {
			width: 100%;
			height: 0.3vh;
			margin: 2rem 0rem;
			background-color: ${(props) => props.theme.colors.primaryColor};
		}
		p {
			font-size: 2rem;
			font-weight: 600;
		}
	}
`;
