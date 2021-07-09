// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Layout Components
import { Section, Header, Content } from "../styles";

export const Detail = () => {
	return (
		<Section>
			<Header></Header>
			<Content>
				<section>
					<button>Back</button>
					<button>Wikipedia</button>
				</section>
				<section>
					<h1>Dog Name</h1>
					<div>
						<button>Character Feature</button>
						<button>Character Feature</button>
						<button>Character Feature</button>
					</div>
					<div>
						<h2>Weight (kg)</h2>
						<h2>Length (cm)</h2>
						<h2>Life Expectancy (years)</h2>
					</div>
				</section>
			</Content>
		</Section>
	);
};
