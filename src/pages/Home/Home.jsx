// Logo

import logo from "../../assets/images/illustrations/shiba.png";

// CSS

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<section className={styles["Page"]}>
			<div className={styles["Page__opener"]}>
				<h1 className={styles["Page__opener__title"]}>
					Dog.
					<span className={styles["Page__opener__title__secundary"]}>io</span>
				</h1>
				<h2 className={styles["Page__opener__subtitle"]}>
					Vind de trouwe viervoeter die bij je past!
				</h2>
				<img
					className={styles["Page__opener__logo"]}
					src={logo}
					alt="shiba-inu"
				/>
			</div>
			<div className={styles["Page__start"]}>
				<button className={styles["Page__start__button"]}>Get started</button>
			</div>
		</section>
	);
};

export default Home;
