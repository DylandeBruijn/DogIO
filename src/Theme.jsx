// React
import React from "react";

// ThemeProvider
import { ThemeProvider } from "styled-components";

// Theme

const theme = {
	colors: {
		primaryColor: "#673731",
		primaryColorDark: "#4b2824",
		secundaryColor: "#FAAF5E",
		tertiaryColor: "#ffda75",
		textColor: "#b4b2b1",
		darkTextColor: "#878787",
		primaryBackgroundColor: "#fffbf5",
		secundaryBackgroundColor: "#ffeed6",
		primaryCardColor: "#ffe6c7",
		secundaryCardColor: "#fff2c7",
		tertiaryCardColor: "#d1d4ff",
		quaternaryCardColor: "#fdcbc9",
	},
};

// Theme Component

export const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
