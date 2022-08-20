import styled from "styled-components";

import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledTable = styled(TableContainer)`
  background-color: #202124;
  border-radius: 10px;
  padding: 20px;
`;

export const StyledCell = styled(TableCell)`
  && {
    border-bottom: 1px solid #616161;
    text-align: center;
    color: rgba(116, 109, 109, 0.973);
  }
`;

export const StyledLoading = styled(CircularProgress)`
  && {
    color: rgba(116, 109, 109, 0.973);
  }
`;
