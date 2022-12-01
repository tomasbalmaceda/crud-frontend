import styled from "styled-components";

import { TextField as MuiField, Button as MuiButton } from "@mui/material";

export const TextInput = styled(MuiField)`
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 4px;

  width: 160px;

  && {
    margin: 5px;
  }

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

export const Button = styled(MuiButton)`
  && {
    margin-left: 10px;
    background-color: ${(props) => props.theme.colors.button};
    font-family: "Nanum Gothic", sans-serif;
  }

  &&:hover {
    background-color: ${(props) => props.theme.colors.buttonPressed};
  }
`;
