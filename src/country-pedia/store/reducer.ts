import produce, { Draft } from "immer";
import { Country } from "../domain/country";
import { Currency, Language, Region } from "../domain/country-pedia-response";
import { CountryPediaAction, CountryPediaDispatchObject } from "./actions";

export interface CountryPediaState {
  title: string;
  languages: Language[] | null;
  currencies: Currency[] | null;
  regions: Region[] | null;
  countries: Country[] | null;
  countryId: string;
}

export const initialState: CountryPediaState = {
  title: "CountryPedia",
  languages: null,
  currencies: null,
  regions: null,
  countries: null,
  countryId: "",
};

export const countryPediaContextReducer = produce(
  (
    draft: Draft<CountryPediaState>,
    { type, payload }: CountryPediaDispatchObject<any>
  ) => {
    switch (type) {
      case CountryPediaAction.ClearState:
        return initialState;
      case CountryPediaAction.SetLanguages:
        draft.languages = payload;
        break;
      case CountryPediaAction.SetCurrencies:
        draft.currencies = payload;
        break;
      case CountryPediaAction.SetRegions:
        draft.regions = payload;
        break;
      case CountryPediaAction.SetCountries:
        draft.countries = payload;
        break;
      case CountryPediaAction.SetCountryId:
        draft.countryId = payload;
        break;
      default:
        throw new Error(`Unknown countryPedia action type: ${type}`);
    }
  }
);
