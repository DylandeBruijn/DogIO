import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
	HiUser,
	HiSearch,
	HiHome,
	HiInformationCircle,
	HiChatAlt2,
} from "react-icons/hi";
import styles from "./BottomMenu.module.scss";

const BottomMenu = () => {
	return (
		<nav className={styles["Nav"]}>
			<NavLink
				to="/profile"
				exact
				className={styles["Nav__link"]}
				activeClassName={styles["Nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiUser />
				</IconContext.Provider>
				<span className={styles["Nav__text"]}>Profile</span>
			</NavLink>

			<NavLink
				to="/overview"
				exact
				className={styles["Nav__link"]}
				activeClassName={styles["Nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiSearch />
				</IconContext.Provider>
				<span className={styles["Nav__text"]}>Overview</span>
			</NavLink>

			<NavLink
				to="/"
				exact
				className={styles["Nav__link"]}
				activeClassName={styles["Nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiHome />
				</IconContext.Provider>
				<span className={styles["Nav__text"]}>Home</span>
			</NavLink>

			<NavLink
				to="/about"
				exact
				className={styles["Nav__link"]}
				activeClassName={styles["Nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiInformationCircle />
				</IconContext.Provider>
				<span className={styles["Nav__text"]}>About</span>
			</NavLink>

			<NavLink
				to="/contact"
				exact
				className={styles["Nav__link"]}
				activeClassName={styles["Nav__link--active"]}
			>
				<IconContext.Provider value={{ size: "2em" }}>
					<HiChatAlt2 />
				</IconContext.Provider>
				<span className={styles["Nav__text"]}>Contact</span>
			</NavLink>
		</nav>
	);
};

export default BottomMenu;
