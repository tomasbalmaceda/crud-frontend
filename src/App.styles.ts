import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    font-family: 'Nanum Gothic', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

export const Table = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
