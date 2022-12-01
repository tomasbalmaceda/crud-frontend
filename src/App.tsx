import * as C from "./App.styles";

import { Table } from "./components/Table";
import { Form } from "./components/Form";

import { LoadingContextProvider } from "./contexts/LoadingContext";

import { Header } from "./components/Header";

import { useContext } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <C.GlobalStyle />
      <Header />
      <LoadingContextProvider>
        <C.Table>
          <Form />
        </C.Table>
        <C.Table>
          <Table />
        </C.Table>
      </LoadingContextProvider>
    </ThemeProvider>
  );
};

export default App;
