import styled from "styled-components";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

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
    color: rgba(116, 109, 109, 0.973);
  }
`;
