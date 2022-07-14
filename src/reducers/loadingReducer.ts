import { reducerActionType } from "../types/reducerActionType";

export type loadingType = {
  loadingData: boolean;
};

export const loadingInitialState: loadingType = {
  loadingData: true,
};

export const loadingReducer = (
  state: loadingType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "CHANGE_LOADING_DATA":
      return { ...state, loadingData: action.payload.loadingData };
      break;
  }

  return state;
};
    