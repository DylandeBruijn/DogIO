import { NavLink } from "react-router-dom";

function BottomMenu() {
	return (
		<nav>
			<div className="nav-container">
				<ul>
					<li>
						<NavLink to="/profile" exact activeClassName="active-link">
							Profile
						</NavLink>
					</li>

					<li>
						<NavLink to="/overview" exact activeClassName="active-link">
							Overview
						</NavLink>
					</li>

					<li>
						<NavLink to="/" exact activeClassName="active-link">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink to="/about" exact activeClassName="active-link">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" exact activeClassName="active-link">
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default BottomMenu;
