// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Components
import { DogCard } from "./DogCard";

export const DogGrid = ({ filteredDogs, loading }) => {
	return loading ? (
		<Message>Loading...</Message>
	) : (
		<DogCards>
			{filteredDogs?.map((filteredDog) => (
				<DogCard key={filteredDog.id} filteredDog={filteredDog} />
			))}
		</DogCards>
	);
};
// Styled Components

const Message = styled.span`
	font-size: 2rem;
	font-weight: 600;
	color: ${(props) => props.theme.colors.primaryColor};
`;

const DogCards = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	@media (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`;
