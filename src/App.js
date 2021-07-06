import React from "react";

// Components

import BottomMenu from "./components/bottommenu/BottomMenu";

// Pages

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import OverviewPage from "./pages/Overview";
import DetailPage from "./pages/Detail";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ProfilePage from "./pages/Profile";

// CSS

// React Router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/login">
					<LoginPage />
				</Route>
				<Route exact path="/overview">
					<OverviewPage />
				</Route>
				<Route exact path="/overview/:dog">
					<DetailPage />
				</Route>
				<Route exact path="/about">
					<AboutPage />
				</Route>
				<Route exact path="/contact">
					<ContactPage />
				</Route>
				<Route exact path="/profile">
					<ProfilePage />
				</Route>
			</Switch>
			<BottomMenu />
		</Router>
	);
}

export default App;
