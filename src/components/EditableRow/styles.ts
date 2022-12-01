import styled from "styled-components";

import {
  TextField as MuiField,
  Button as MuiButton,
  TableCell as MuiCell,
} from "@mui/material";

export const TextInput = styled(MuiField)`
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

export const Button = styled(MuiButton)`
  svg {
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

export const Cell = styled(MuiCell)`
  && {
    padding: 10px;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const DisplayDiv = styled.div`
  display: flex;
  margin: 6px;
`;
