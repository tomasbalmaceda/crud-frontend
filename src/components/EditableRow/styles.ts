import styled from "styled-components";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

export const StyledTextField = styled(TextField)`
  && {
    width: 130px;
    margin: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.input};
  }
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
    background-color: ${(props) => props.theme.colors.button};
    margin: 3px;
  }

  &&:hover {
    background-color: ${(props) => props.theme.colors.buttonPressed};
  }
`;

export const StyledCell = styled(TableCell)`
  && {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;
