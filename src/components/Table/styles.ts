import styled from "styled-components";

import {
  TableContainer as MuiContainer,
  TableCell as MuiCell,
  CircularProgress as MuiProgress,
} from "@mui/material";

export const Container = styled(MuiContainer)`
  background-color: ${(props) => props.theme.colors.tableBackground};
  border-radius: 10px;
  padding: 20px;
`;

export const Cell = styled(MuiCell)`
  && {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Progress = styled(MuiProgress)`
  && {
    color: ${(props) => props.theme.colors.text};
  }
`;
