import styled, {createGlobalStyle} from "styled-components";

const darkGrey = "#515263";
const ligtGrey = "#f7f7f7"

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${darkGrey}; 
    background-color: ${ligtGrey};
    font-family: 'Frank Ruhl Libre', serif;
  }
`