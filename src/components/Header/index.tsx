import { useContext, useState } from "react";
import * as C from "./styles";

import { ThemeContext } from "../../contexts/ThemeContext";

import dark from "../../themes/dark";
import light from "../../themes/light";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setTheme(theme === light ? dark : light);
    setChecked(!checked);
  };

  return (
    <C.Header>
      <C.Title>CRUD</C.Title>
      <C.MaterialUISwitch onChange={() => handleChange()} />
    </C.Header>
  );
};
