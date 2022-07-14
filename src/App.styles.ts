import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #17181f;
  }
`;

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  border-radius: 5px;
`;

export const Table = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  text-align: center;
`;
