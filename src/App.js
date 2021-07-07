// React

import React, { useState } from "react";

// React Router

import { Route, Switch, Redirect } from "react-router-dom";

// Components

import BottomMenu from "./components/bottommenu/BottomMenu";
import PrivateRoute from "./components/privateroute/PrivateRoute";

// Pages

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Overview from "./pages/overview/Overview";
import Detail from "./pages/detail/Detail";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";

// CSS

import "./styles/app.scss";

function App() {
	const [isAuthenticated, toggleIsAuthenticated] = useState(false);
	return (
		<div>
			<Switch>
				<PrivateRoute exact path="/" isAuthenticated={isAuthenticated}>
					<Home />
				</PrivateRoute>
				<Route exact path="/login">
					<Login toggleIsAuthenticated={toggleIsAuthenticated} />
				</Route>
				<Route exact path="/overview">
					<Overview />
				</Route>
				<Route exact path="/overview/:dog">
					<Detail />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<PrivateRoute exact path="/profile" isAuthenticated={isAuthenticated}>
					<Profile
						isAuthenticated={isAuthenticated}
						toggleIsAuthenticated={toggleIsAuthenticated}
					/>
				</PrivateRoute>
			</Switch>
			{isAuthenticated ? <BottomMenu /> : <Redirect to="/login" />}
		</div>
	);
}

export default App;
