// Import GlobalStyle
import { createGlobalStyle } from "styled-components";

// Import Pattern
import pattern from "./assets/images/patterns/dog-pattern.png";

// Export GlobalStyle
export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    /* overflow-x: hidden;
    overflow-y: scroll; */
    background-image: url(${pattern});
}

body {
    font-family: "Poppins", sans-serif;

h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    color: ${(props) => props.theme.colors.primaryColor};
    margin-bottom: 2rem;
}

h1 {
    font-size: 5rem;
}

h2 {
    font-size: 3rem;
}

h3 {
    font-size: 2rem;
}

h4 {
    font-size: 1.1rem;
}

a {
    font-size: 1rem;
}

p {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primaryColor};
    margin-bottom: 2rem;
}
`;
