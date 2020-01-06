import React, { Dispatch, useReducer } from "react";
import { Actions, initialState, IState, reducer } from "./reducer";

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}

export const AdminStore = React.createContext({} as IContextProps);

export function AdminStoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <AdminStore.Provider value={value}>{props.children}</AdminStore.Provider>
  );
}
