import styled from "styled-components";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

export const StyledTextField = styled(TextField)`
  background-color: #ffffff;
  border-radius: 4px;
  margin: 4px !important;
  width: 130px;

  input {
    font-family: "Nanum Gothic", sans-serif;
  }
  label {
    font-family: "Nanum Gothic", sans-serif;
  }
`;

export const StyledButton = styled(Button)`
  div {
    height: 23px;
  }

  && {
    background-color: #303134;
    margin: 3px;
  }

  &&:hover {
    background-color: #353535;
  }
`;

export const StyledCell = styled(TableCell)`
  && {
    border-bottom: 1px solid #616161;
    padding: 10px;
    text-align: center;
    color: rgba(116, 109, 109, 0.973);
  }
`;
