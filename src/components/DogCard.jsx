// React
import React from "react";

// Helpers
import { dogUrl } from "../helpers/dogUrl";

// Layout Components
import { StyledLink } from "../styles";

// Styled Components
import styled from "styled-components";

export const DogCard = ({ filteredDog }) => {
	return (
		<StyledLink
			key={filteredDog.id}
			to={`/overview/${dogUrl(filteredDog.name)}`}
		>
			<DogContent>
				<img src={filteredDog.image.url} alt={filteredDog.name} />
				<div>
					<h3>{filteredDog.name}</h3>
					<div>
						<div>
							<h4>Weight</h4>
							<p>{filteredDog.weight.metric} kg</p>
						</div>
						<div>
							<h4>Height</h4>
							<p>{filteredDog.height.metric} cm</p>
						</div>
						<div>
							<h4>Life Span</h4>
							<p>{filteredDog.life_span}</p>
						</div>
					</div>
				</div>
			</DogContent>
		</StyledLink>
	);
};

const DogContent = styled.article`
	cursor: pointer;
	border-radius: 1rem;
	background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
	box-shadow: 0px 5px 50px
		${(props) => props.theme.colors.secundaryBackgroundColor};
	img {
		width: 100%;
		height: 40rem;
		object-fit: cover;
		border-radius: 1rem;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		@media (max-width: 600px) {
			height: 50rem;
		}
	}
	div {
		padding: 4rem;
		@media (max-width: 600px) {
			padding: 2rem 4rem;
			text-align: center;
		}
		h3 {
			font-size: 2rem;
			margin-bottom: 3rem;
			@media (max-width: 600px) {
				margin-bottom: 0rem;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			padding: 0;
			@media (max-width: 600px) {
				flex-direction: column;
			}
			div {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding: 0;
				@media (max-width: 600px) {
					display: none;
				}
				h4 {
					margin-bottom: 1rem;
					font-size: 1.5rem;
					font-weight: 600;
				}
				p {
					padding: 0;
					margin: 0;
					font-size: 1.3rem;
					font-weight: 600;
					color: ${(props) => props.theme.colors.textColor};
				}
			}
		}
	}
	&:hover {
		transition: all 0.5s ease;
		box-shadow: 0px 5px 100px #ffc379;
	}
`;
