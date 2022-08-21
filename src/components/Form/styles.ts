import styled from "styled-components";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const StyledTextField = styled(TextField)`
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 4px;
  margin: 4px !important;
  width: 160px;

  input {
    font-family: "Nanum Gothic", sans-serif;
  }
  label {
    font-family: "Nanum Gothic", sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  && {
    margin-left: 10px;
    background-color: ${(props) => props.theme.colors.button};
    font-family: "Nanum Gothic", sans-serif;
  }

  &&:hover {
    background-color: ${(props) => props.theme.colors.buttonPressed};
  }
`;
