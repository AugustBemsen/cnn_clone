import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: #F5FAFF;
        color: #222831;
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
