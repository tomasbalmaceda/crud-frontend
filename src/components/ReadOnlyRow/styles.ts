import styled from "styled-components";

import Button from "@mui/material/Button";

export const Container = styled.div``;

export const StyledButton = styled(Button)`
  && {
    /* font-family: "Nanum Gothic", sans-serif;
    border-radius: 5px; */

    margin: 4px !important;
  }

  &:hover {
    .st0 {
      stroke: blue;
    }
  }
  /* svg {
    color: "red" !important;
    path {
      color: "red" !important;
    }
  } */
`;
