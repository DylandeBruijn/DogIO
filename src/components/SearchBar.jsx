// IMport React
import React, { useState } from "react";

// Import Styled Components
import styled from "styled-components";

export const SearchBar = ({ dogs }) => {
	// State
	const [text, setText] = useState("");
	const [suggestions, setSuggestions] = useState([]);

	// onSuggestHandler
	const onSuggestHandler = (text) => {
		setText(text);
		setSuggestions([]);
	};
	// OnChange
	const onChangeHandler = (text) => {
		let matches = [];
		if (text.length > 0) {
			matches = dogs.filter((dog) => {
				const regEx = new RegExp(`${text}`, "gi");
				return dog.name.match(regEx);
			});
		}
		setSuggestions(matches);
		setText(text);
	};
	return (
		<section>
			<input
				type="text"
				onChange={(e) => onChangeHandler(e.target.value)}
				value={text}
			/>
			{suggestions?.map((suggestion) => (
				<div
					key={suggestions.id}
					onClick={() => onSuggestHandler(suggestion.name)}
				>
					{suggestion.name}
				</div>
			))}
		</section>
	);
};
