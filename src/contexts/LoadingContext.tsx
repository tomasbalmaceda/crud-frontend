import React, { createContext, useState, SetStateAction } from "react";

type ContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<SetStateAction<boolean>>;
};

const initialState = {
  isLoading: true,
  setIsLoading: () => {},
};

export const LoadingContext = createContext<ContextType>(initialState);

type Props = {
  children: React.ReactNode;
};

export const LoadingContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(initialState.isLoading);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
