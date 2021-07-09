// Import React
import React from "react";

// Import ReactDOM
import ReactDOM from "react-dom";

// Import React Router
import { BrowserRouter as Router } from "react-router-dom";

// Import App
import { App } from "./App";

// Import reportWebVitals
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
