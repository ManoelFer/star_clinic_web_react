import { createGlobalStyle } from 'styled-components';

import { GilroyExtraBold, GilroyLight } from '@/assets';


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy-Light';
        src: url(${GilroyLight}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gilroy-ExtraBold';
        src: url(${GilroyExtraBold}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    *{
        box-sizing: border-box;
    }

    #root {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    body {
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        background-color: ${(props) => props.theme.colors.backgroundColor};
        -webkit-transition: background-color 1000ms linear;
        -ms-transition: background-color 1000ms linear;
        transition: background-color 1000ms linear;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }
`;