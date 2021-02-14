import { useQuery } from "@apollo/client";
import { Country } from "../domain/country";
import {
  CurrenciesResoponse,
  LanguageResponse,
  RegionsResponse,
} from "../domain/country-pedia-response";
import {
  GET_COUNTRIES_LIST,
  GET_CURRENCIES_LIST,
  GET_LANGUAGES_LIST,
  GET_REGIONS_LIST,
} from "./queries/country-pedia.queries";

const useLanguagesQuery = () => {
  const { loading, error, data } = useQuery<LanguageResponse>(
    GET_LANGUAGES_LIST
  );
  return {
    languages: data?.Language,
    loading,
    error,
  };
};

const useCurrenciesQuery = () => {
  const { data, loading, error } = useQuery<CurrenciesResoponse>(
    GET_CURRENCIES_LIST
  );

  return {
    currencies: data?.Currency,
    loading,
    error,
  };
};

const useRegionsQuery = () => {
  const { data, loading, error } = useQuery<RegionsResponse>(GET_REGIONS_LIST);

  return {
    regions: data?.Region,
    loading,
    error,
  };
};

const useCountriesQuery = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES_LIST);

  return {
    countries: data?.Country,
    loading,
    error,
  };
};

export const ApolloClientCountryPediaRequest = {
  useLanguagesQuery,
  useCurrenciesQuery,
  useRegionsQuery,
  useCountriesQuery,
};
