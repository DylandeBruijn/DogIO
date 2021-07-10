// Import React
import React from "react";

// Import React Router
import { Route, Switch } from "react-router-dom";

// Import Pages
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Overview } from "./pages/Overview";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";

// Import Components
import { Navigation } from "./components/Navigation";

// Import GlobalStyle
import { GlobalStyle } from "./GlobalStyle";

// Import Theme
import { Theme } from "./Theme";

export const App = () => {
	return (
		<>
			<Theme>
				<GlobalStyle />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/overview">
						<Overview />
					</Route>
					<Route exact path="/overview/:id">
						<Detail />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
				</Switch>
				<Navigation />
			</Theme>
		</>
	);
};
