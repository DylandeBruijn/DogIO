import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import DogFilter from "../../components/DogFilter/DogFilter";
import styles from "./Overview.module.scss";

const Overview = () => {
	const [dogData, setDogData] = useState(null);
	const [error, setError] = useState("");
	const [loading, toggleLoading] = useState(false);

	useEffect(() => {
		async function fetchData() {
			setError(false);
			toggleLoading(true);
			try {
				const response = await axios.get(
					`https://api.thedogapi.com/v1/breeds?api_key=cb9794bd-ce01-481d-947a-b4e2c981c7c0`
				);
				setDogData(response.data);
				console.log(response.data);
			} catch (e) {
				console.error(e);
				setError(true);
			}
			toggleLoading(false);
		}
		fetchData();
	}, []);
	return (
		<section className={styles["Page"]}>
			{error && <span>Oeps er is iets fout gegaan!</span>}
			{loading && <span>Loading...</span>}
			{dogData?.map((dog) => (
				<article>
					<h3>Name: {dog.name}</h3>
					<p>Bred for: {dog.bred_for}</p>
					<p>Breed group: {dog.breed_group}</p>
				</article>
			))}
		</section>
	);
};

export default Overview;
