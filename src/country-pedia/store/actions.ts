interface DispatchObject<T, P = any> {
  type: T;
  payload?: P;
}

export enum CountryPediaAction {
  ClearState = "CLEAR_STATE",
  SetLanguages = "SET_LANGUAGES",
  SetCurrencies = "SET_CURRENCIES",
  SetRegions = "SET_REGIONS",
  SetCountries = "SET_COUNTRIES",
  SetCountryId = "SET_COUNTRY_ID",
}

export type CountryPediaDispatchObject<T> = DispatchObject<
  CountryPediaAction,
  T
>;
