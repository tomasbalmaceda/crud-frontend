import * as C from "./App.styles";

import { Table } from "./components/Table";
import { Form } from "./components/Form";

import { DataContextProvider } from "./contexts/DataContext";

const App = () => {
  return (
    <C.Container>
      <C.GlobalStyle />
      <C.Header>
        <C.Title>CRUD</C.Title>
      </C.Header>
      <DataContextProvider>
        <C.Table>
          <Form />
        </C.Table>
        <C.Table>
          <Table />
        </C.Table>
      </DataContextProvider>
    </C.Container>
  );
};

export default App;
