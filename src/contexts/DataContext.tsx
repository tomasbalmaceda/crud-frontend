import React, { createContext, useState, SetStateAction } from "react";

type ContextType = {
  loading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  loading: true,
  setLoading: () => {},
};

export const DataContext = createContext<ContextType>(initialState);

type ComponentWithChildrenProps = {
  children: React.ReactNode;
};

export const DataContextProvider = ({
  children,
}: ComponentWithChildrenProps) => {
  const [loading, setLoading] = useState(initialState.loading);

  return (
    <DataContext.Provider value={{ loading, setLoading }}>
      {children}
    </DataContext.Provider>
  );
};
