// IMport React
import React from "react";

// Import Styled Components
import styled from "styled-components";

export const SearchBar = () => {
	return (
		<section>
			<span>
				<input type="text" name="search" placeholder="Search" />
				<button type="button">Search</button>
			</span>
		</section>
	);
};
