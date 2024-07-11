import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background-color: black;
    scroll-behavior: smooth;
    font-family: Inter;


}

*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}
`