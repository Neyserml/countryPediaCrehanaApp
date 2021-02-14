import { castDraft } from "immer";
import React, { createContext, PropsWithChildren, useReducer } from "react";
import { DispatchState } from "../../shared/hooks/useDispatchState";
import { CountryPediaDispatchObject } from "../store/actions";
import {
  countryPediaContextReducer,
  CountryPediaState,
  initialState,
} from "../store/reducer";

export type CountryPediaDispatch<T = any> = React.Dispatch<
  CountryPediaDispatchObject<T>
>;

export type CountryPediaContextType = DispatchState<
  CountryPediaState,
  CountryPediaDispatch
>;

export const CountryPediaContext = createContext({} as CountryPediaContextType);

type CountryPediaProviderProps = PropsWithChildren<{
  extraState?: Partial<CountryPediaState>;
}>;

export const CountryPediaProvider: React.FC<CountryPediaProviderProps> = ({
  children,
  extraState = {},
}: CountryPediaProviderProps) => {
  const [state, dispatch] = useReducer(countryPediaContextReducer, {
    ...initialState,
    ...extraState,
  });

  const value = { dispatch, state: castDraft(state) };
  return (
    <CountryPediaContext.Provider value={value}>
      {children}
    </CountryPediaContext.Provider>
  );
};
