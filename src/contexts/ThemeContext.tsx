import React, { createContext, useState, SetStateAction } from "react";

import { themeType } from "../types/themeType";

import dark from "../themes/dark";

type ContextType = {
  theme: themeType;
  setTheme: React.Dispatch<SetStateAction<themeType>>;
};

const initialState = {
  theme: dark,
  setTheme: () => {},
};

export const ThemeContext = createContext<ContextType>(initialState);

type Props = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(initialState.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
