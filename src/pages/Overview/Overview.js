// CSS

import styles from "./Overview.module.scss";

const Overview = () => {
	return (
		<section className={styles["Page"]}>
			<div className={styles["Page__search"]}>
				<input type="text" className={styles["Page__search__field"]}></input>
			</div>
			<div className={styles["Page__filter"]}>
				<h1 className={styles["Page__filter__title"]}>Start searching</h1>
				<p className={styles["Page__filter__body"]}>
					More than a hundred different dog breeds
				</p>
				<div></div>
			</div>
		</section>
	);
};

export default Overview;
