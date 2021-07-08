import { Link } from "react-router-dom";
import styles from "./Detail.module.scss";

const Detail = () => {
	return (
		<section className={styles.test}>
			<article>
				<section>
					<button>
						<Link to="/overview">Back</Link>
					</button>
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
			</article>
		</section>
	);
};

export default Detail;
