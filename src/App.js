// React

import React, { useState } from "react";

// React Router

import { Route, Switch, Redirect } from "react-router-dom";

// Components

import BottomMenu from "./components/BottomMenu/BottomMenu";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// Pages

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Overview from "./pages/Overview/Overview";
import Detail from "./pages/Detail/Detail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";

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
