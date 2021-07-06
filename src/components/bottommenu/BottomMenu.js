// React Router

import { NavLink } from "react-router-dom";

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
		<nav>
			<div className="nav-container">
				<ul>
					<li>
						<NavLink to="/profile" exact activeClassName="active-link">
							<HiUser />
						</NavLink>
					</li>

					<li>
						<NavLink to="/overview" exact activeClassName="active-link">
							<HiSearch />
						</NavLink>
					</li>

					<li>
						<NavLink to="/" exact activeClassName="active-link">
							<HiHome />
						</NavLink>
					</li>

					<li>
						<NavLink to="/about" exact activeClassName="active-link">
							<HiInformationCircle />
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" exact activeClassName="active-link">
							<HiChatAlt2 />
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default BottomMenu;
