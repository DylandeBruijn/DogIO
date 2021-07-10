// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Params
import { useParams } from "react-router-dom";

// Import Layout Components
import { Section, Header, Content, Button } from "../styles";

export const Detail = () => {
	const params = useParams();
	console.log(params);
	return (
		<Section>
			<DetailHeader>
				<div className="button-row">
					<Button>Back</Button>
					<Button>Wikipedia</Button>
				</div>
			</DetailHeader>
			<Content>
				<section>
					<h2>Dog Name</h2>
					<div>
						<Button>Character Feature</Button>
						<Button>Character Feature</Button>
						<Button>Character Feature</Button>
					</div>
					<div>
						<h3>Weight (kg)</h3>
						<h3>Length (cm)</h3>
						<h3>Life Expectancy (years)</h3>
					</div>
				</section>
			</Content>
			))}
		</Section>
	);
};

// Styled Components

const DetailHeader = styled(Header)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: lightgrey;
	.button-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3rem;
		button {
			margin: 0;
		}
	}
`;
