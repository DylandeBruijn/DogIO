// Import React
import React from "react";

// Import Styled Components
import styled from "styled-components";

// Import Images
import shiba from "../assets/images/illustrations/shiba.png";

export const Login = () => {
	return (
		<section>
			<div>
				<h1>Dog.io</h1>
				<h2>Vind de trouwe viervoeter die bij je past!</h2>
				<img src={shiba} alt="shiba-inu" />
			</div>
			<div>
				<form>
					<input type="text" placeholder="Username" />
					<input type="text" placeholder="Password" />
					<input type="submit" />
				</form>
			</div>
		</section>
	);
};
