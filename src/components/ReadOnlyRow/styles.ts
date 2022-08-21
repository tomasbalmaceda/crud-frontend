import styled from "styled-components";

import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

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
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }
`;
