// React Router DOM
import { Route, Redirect } from "react-router-dom";

// Authentication
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ children, ...rest }) => {
	const { user } = useAuth();

	return (
		<Route
			{...rest}
			render={() => (user ? children : <Redirect to="/login" />)}
		></Route>
	);
};
