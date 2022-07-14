import { reducerActionType } from "../types/reducerActionType";

import { UserType } from "../types/UserType";

export type crudType = {
  userData: UserType[];
};

export const crudInitialState: crudType = {
  userData: [],
};

export const crudReducer = (state: crudType, action: reducerActionType) => {
  switch (action.type) {
    case "CHANGE_CRUD_DATA":
      return { ...state, userData: action.payload.crud };
      break;
  }

  return state;
};
