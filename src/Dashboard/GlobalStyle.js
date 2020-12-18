import styled, {createGlobalStyle} from "styled-components";

export const darkGrey = "#515263";
export const medGrey = "#dad9d9";
export const ligtGrey = "#f7f7f7";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${darkGrey}; 
    background-color: ${ligtGrey};
    font-family: 'Frank Ruhl Libre', serif;
  }
`