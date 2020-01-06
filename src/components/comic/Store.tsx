import React, { Dispatch, createContext, useReducer } from "react" ;
import { IAction, initialState, IState, reducer } from "./reducer";
  
interface IContextProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export const Store = createContext({} as IContextProps);

export default function StoreProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <Store.Provider value={value}>{props.children}</Store.Provider>
  );
}
