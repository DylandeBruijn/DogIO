// React
import React from "react";

// Styled Components
import styled from "styled-components";

// Components
import { DogCard } from "./DogCard";

// Layout Components
import { ErrorMessage, SuccesMessage } from "../styles";

export const DogGrid = ({ filteredDogs, loading, error }) => {
	return (
		<>
			{error && (
				<ErrorMessage>
					There was something wrong with your request!
				</ErrorMessage>
			)}
			{loading && <SuccesMessage>Loading...</SuccesMessage>}
			<DogCards>
				{filteredDogs?.map((filteredDog) => (
					<DogCard key={filteredDog.id} filteredDog={filteredDog} />
				))}
			</DogCards>
		</>
	);
};
// Styled Components

const DogCards = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	@media (max-width: 1700px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`;
