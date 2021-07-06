// React Router

import { NavLink } from "react-router-dom";

// React Icons Context

import { IconContext } from "react-icons";

// CSS

import styles from "./BottomMenu.module.scss";

// Icons

import {
	HiUser,
	HiSearch,
	HiHome,
	HiInformationCircle,
	HiChatAlt2,
} from "react-icons/hi";

const BottomMenu = () => {
	return (
		<nav className={styles.nav}>
			<NavLink
				to="/profile"
				exact
				className={styles.nav__link}
				activeClassName={styles["nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiUser />
				</IconContext.Provider>
				<span className={styles.nav__text}>Profile</span>
			</NavLink>

			<NavLink
				to="/overview"
				exact
				className={styles.nav__link}
				activeClassName={styles["nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiSearch />
				</IconContext.Provider>
				<span className={styles.nav__text}>Overview</span>
			</NavLink>

			<NavLink
				to="/"
				exact
				className={styles.nav__link}
				activeClassName={styles["nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiHome />
				</IconContext.Provider>
				<span className={styles.nav__text}>Home</span>
			</NavLink>

			<NavLink
				to="/about"
				exact
				className={styles.nav__link}
				activeClassName={styles["nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiInformationCircle />
				</IconContext.Provider>
				<span className={styles.nav__text}>About</span>
			</NavLink>

			<NavLink
				to="/contact"
				exact
				className={styles.nav__link}
				activeClassName={styles["nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiChatAlt2 />
				</IconContext.Provider>
				<span className={styles.nav__text}>Contact</span>
			</NavLink>
		</nav>
	);
};

export default BottomMenu;
