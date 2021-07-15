// Import React
import React, { useState, useEffect } from "react";

// Import React Router
import { Link } from "react-router-dom";

// Import Axios
import axios from "axios";

// Import Styled Components
import styled from "styled-components";

// Import Params
import { useParams } from "react-router-dom";

// Import Layout Components
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
		<>
			<DetailHeader imgURL={imgURL}>
				<div>
					<Button>Back</Button>
					<Link>
						<Button>Wikipedia</Button>
					</Link>
				</div>
			</DetailHeader>
			<Section>
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
			</Section>
		</>
	);
};

// Styled Components

const DetailHeader = styled(Header)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: url(${(props) => props.imgURL});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: bottom bottom;
	height: 40vh;
`;

const DetailContent = styled(Content)``;

const FeatureContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 3rem;
`;

const Feature = styled(Button)`
	font-size: 0.8rem;
	margin: 1rem 1rem 1rem 0rem;
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
			font-size: 1.4rem;
			font-weight: 600;
		}
	}
`;
