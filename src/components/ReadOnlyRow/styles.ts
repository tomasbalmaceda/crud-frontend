import styled from "styled-components";

import { TableCell as MuiCell, Button as MuiButton } from "@mui/material";

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
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const DisplayDiv = styled.div`
  display: flex;
  margin: 6px;
`;
