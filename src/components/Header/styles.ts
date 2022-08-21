import styled from "styled-components";

import Switch from "@mui/material/Switch";

export const Header = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.tableBackground};
`;

export const Title = styled.h1`
  margin: 10px;
  color: ${(props) => props.theme.colors.titleText};
  border-radius: 5px;
  text-align: right;
`;

export const MaterialUISwitch = styled(Switch)`
  && {
    margin-left: auto;
    margin-right: 0;
    margin-top: 10px;

    .MuiSwitch-thumb {
      color: ${(props) => props.theme.colors.themeButton};
    }
    .Mui-checked + .MuiSwitch-track {
      background-color: ${(props) => props.theme.colors.themeButton};
    }
  }
`;
