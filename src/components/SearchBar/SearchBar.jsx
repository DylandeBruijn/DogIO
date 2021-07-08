import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ setDogHandler }) => {
	const [query, setQuery] = useState("");

	function handleClick() {
		setDogHandler(query);
	}

	function keyPressCheck(e) {
		if (e.keyCode === 13) {
			setDogHandler(query);
		}
	}

	return (
		<span className={styles["Searchbar"]}>
			<input
				className={styles["Searchbar__input"]}
				type="text"
				name="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyUp={keyPressCheck}
				placeholder="Search"
			/>

			<button
				className={styles["Searchbar__submit"]}
				type="button"
				onClick={handleClick}
			>
				Search
			</button>
		</span>
	);
};

export default SearchBar;
