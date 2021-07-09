// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

export const LoginForm = () => {
	return (
		<section>
			<h2>LoginForm Component</h2>
			<form>
				<label htmlFor="userName">Username:</label>
				<input type="text" name="userName" id="userName" />
				<label htmlFor="password">Password:</label>
				<input type="password" name="password" id="password" />
				<input type="submit" />
			</form>
		</section>
	);
};
