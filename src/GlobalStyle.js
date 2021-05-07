import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }

    input {
        outline: none;
        border: none;
    }
`;