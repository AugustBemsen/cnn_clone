import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --white-color: #F5FAFF;
        --text-color: #222831;
        --blue-color: #1A014E;
        --red-color: #CA2026;
        --grey-color: #9389AC
    }

    html, body {
        font-family: 'Roboto', sans-serif;
        background: var(--white-color);
        color: var(--text-color);
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    input, button {
        outline: none
    }
    
    button {
        cursor: pointer
    }
`;

export default GlobalStyles;
