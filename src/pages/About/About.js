// React Icons

import { HiLocationMarker, HiMail, HiDeviceMobile } from "react-icons/hi";

// CSS

import styles from "./About.module.scss";

const About = () => {
	return (
		<section className={styles["Page"]}>
			<div className={styles["Page__header"]}></div>
			<div className={styles["Page__content"]}>
				<h3 className={styles["Page__content__title"]}>About</h3>
				<p className={styles["Page__content__body"]}>
					DogIO helps you find your perfect furry four legged friend! Use our
					user friendly search function to match with all kinds of dogs. Do you
					have suggestions or questions? Don't hesitate to contact us! We
					respond as quickly as possible.
				</p>
				<div className={styles["Page__content__information"]}>
					<HiLocationMarker
						className={styles["Page__content__information__icon"]}
					/>
					<span className={styles["Page__content__information__body"]}>
						Ginnekenstraat 112C
					</span>
				</div>
				<div className={styles["Page__content__information"]}>
					<HiMail className={styles["Page__content__information__icon"]} />
					<span className={styles["Page__content__information__body"]}>
						dylandebruyn1993@gmail.com
					</span>
				</div>
				<div className={styles["Page__content__information"]}>
					<HiDeviceMobile
						className={styles["Page__content__information__icon"]}
					/>
					<span className={styles["Page__content__information__body"]}>
						0610642044
					</span>
				</div>
				<button className={styles["Page__content__button"]}>Contact</button>
			</div>
		</section>
	);
};

export default About;
