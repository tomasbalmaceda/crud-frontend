import styled from "styled-components";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  && {
    font-family: "Nanum Gothic", sans-serif;
    margin: 5px;
  }
`;
