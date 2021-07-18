// React
import React from "react";

// React Router
import { Route, Switch } from "react-router-dom";

// Pages
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Overview } from "./pages/Overview";
import { Profile } from "./pages/Profile";

// Components
import { Navigation } from "./components/ui/Navigation";

// Authentication
import { LoginForm } from "./components/auth/LoginForm";
import { ConfirmForm } from "./components/auth/ConfirmForm";

// PrivateRoute
import { PrivateRoute } from "./components/route/PrivateRoute";

// GlobalStyle
import { GlobalStyle } from "./GlobalStyle";

// Theme
import { Theme } from "./Theme";

export const App = () => {
	return (
		<>
			<Theme>
				<GlobalStyle />
				<Switch>
					<PrivateRoute exact path="/">
						<Home />
					</PrivateRoute>
					<Route exact path="/login">
						<LoginForm />
					</Route>
					<Route exact path="/confirm">
						<ConfirmForm />
					</Route>
					<PrivateRoute exact path="/overview">
						<Overview />
					</PrivateRoute>
					<PrivateRoute exact path="/overview/:id">
						<Detail />
					</PrivateRoute>
					<PrivateRoute exact path="/about">
						<About />
					</PrivateRoute>
					<PrivateRoute exact path="/contact">
						<Contact />
					</PrivateRoute>
					<PrivateRoute exact path="/profile">
						<Profile />
					</PrivateRoute>
					<Route>
						<h2>404 Page Not Found</h2>
					</Route>
				</Switch>
				<Navigation />
			</Theme>
		</>
	);
};
