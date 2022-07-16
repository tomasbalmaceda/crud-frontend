import React, { createContext, useReducer } from "react";

import {
  loadingType,
  loadingInitialState,
  loadingReducer,
} from "../reducers/loadingReducer";

import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  loading: loadingType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  loading: loadingInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  loading: loadingReducer(state.loading, action),
});

type ComponentWithChildrenProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ComponentWithChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
