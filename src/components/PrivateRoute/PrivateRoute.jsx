import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
	return (
		<Route {...rest}>
			{isAuthenticated ? children : <Redirect to="/login" />}
		</Route>
	);
};

export default PrivateRoute;
