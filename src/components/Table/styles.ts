import styled from "styled-components";

import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledTable = styled(TableContainer)`
  background-color: ${(props) => props.theme.colors.tableBackground};
  border-radius: 10px;
  padding: 20px;
`;

export const StyledCell = styled(TableCell)`
  && {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const StyledLoading = styled(CircularProgress)`
  && {
    color: ${(props) => props.theme.colors.text};
  }
`;
