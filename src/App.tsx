import * as C from "./App.styles";

import { Table } from "./components/Table";
import { Form } from "./components/Form";

import { ContextProvider } from "./contexts/Context";

const App = () => {
  return (
    <C.Container>
      <C.GlobalStyle />
      <C.Header>
        <C.Title>CRUD</C.Title>
      </C.Header>
      <ContextProvider>
        <C.Table>
          <Form />
        </C.Table>
        <C.Table>
          <Table />
        </C.Table>
      </ContextProvider>
    </C.Container>
  );
};

export default App;
