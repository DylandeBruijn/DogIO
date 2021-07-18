// React
import React, { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Styled Components
import styled from "styled-components";

// Params
import { useParams } from "react-router-dom";

// Layout Components
import {
	Section,
	Header,
	Content,
	Button,
	ContentTitle,
	StyledLink,
	ErrorMessage,
	SuccesMessage,
} from "../styles";

export const Detail = () => {
	// Params
	const dogName = useParams();

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
			} catch (e) {
				setError(true);
			}
			toggleLoading(false);
		}
		loadDog();
	}, [dogName.id]);

	// Computing
	const features = dog?.temperament.split(", ");
	const imgURL = `https://cdn2.thedogapi.com/images/${dog?.reference_image_id}.jpg`;

	return (
		<Section>
			<DetailHeader imgURL={imgURL}>
				<StyledLink to="/overview">
					<Button>Back</Button>
				</StyledLink>
			</DetailHeader>
			<Content>
				{error && (
					<ErrorMessage>
						There was something wrong with your request!
					</ErrorMessage>
				)}
				{loading && <SuccesMessage>Loading...</SuccesMessage>}
				<ContentTitle>{dog?.name}</ContentTitle>
				<FeatureContainer>
					{features?.map((feature, i) => (
						<Feature key={i}>{feature}</Feature>
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
			</Content>
		</Section>
	);
};

// Styled Components

const DetailHeader = styled(Header)`
	background-image: url(${(props) => props.imgURL});
`;

const FeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-bottom: 4rem;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: autofill;
	}
	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		grid-template-rows: autofill;
	}
`;

const Feature = styled.span`
	font-size: 1rem;
	font-weight: 600;
	text-align: center;
	color: ${(props) => props.theme.colors.primaryBackgroundColor};
	background-color: ${(props) => props.theme.colors.primaryColor};
	margin: 1rem 1rem 1rem 0rem;
	padding: 1rem;
	border-radius: 0;
`;

const InformationContainer = styled.div`
	div {
		margin-bottom: 4rem;
		h3 {
			font-size: 2rem;
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
