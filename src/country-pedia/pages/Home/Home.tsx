import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CardTemplate from "../../../shared/components/CardTemplate/CardTemplete";
import Header from "../../../shared/components/Header/Header";
import useDispatchState from "../../../shared/hooks/useDispatchState";
import { CountryPediaContext } from "../../context";
import { Country } from "../../domain/country";
import {
  Currency,
  Language,
  Region,
} from "../../domain/country-pedia-response";
import { ApolloClientCountryPediaRequest } from "../../proxy/apollo-client-country-pedia.request";
import { CountryPediaAction } from "../../store/actions";
import { COUNTRY_PEDIA_MODULE_ROUTES as Pages } from "../../routes";

const StayledHome = styled.div`
  h3 {
    text-align: center;
  }

  label {
    margin-top: 10px;
    color: red;
  }
`;

const Home: React.FC = () => {
  const [state, dispatch] = useDispatchState(CountryPediaContext);
  const [search, setSearch] = useState({ value: "", touched: false });
  const [countriesFiltered, setCountriesFiltered] = useState<Country[] | null>(
    []
  );
  const { register, handleSubmit, reset } = useForm({
    mode: "all",
  });

  const { languages } = ApolloClientCountryPediaRequest.useLanguagesQuery();
  const { currencies } = ApolloClientCountryPediaRequest.useCurrenciesQuery();
  const { regions } = ApolloClientCountryPediaRequest.useRegionsQuery();
  const {
    countries,
    loading,
  } = ApolloClientCountryPediaRequest.useCountriesQuery();
  const history = useHistory();

  useEffect(() => {
    setCountriesFiltered(countries);
    dispatch({ type: CountryPediaAction.SetLanguages, payload: languages });
    dispatch({
      type: CountryPediaAction.SetCurrencies,
      payload: currencies?.filter((currency) => currency.name !== "null"),
    });
    dispatch({ type: CountryPediaAction.SetRegions, payload: regions });
    dispatch({ type: CountryPediaAction.SetCountries, payload: countries });
  }, [languages, currencies, regions, countries]);

  useEffect(() => {
    const searchUpperCase = search.value.toUpperCase();
    const resultFilterSearch = state.countries?.filter(
      ({ name, alpha2Code }) =>
        searchUpperCase === name.toUpperCase() || searchUpperCase === alpha2Code
    );
    if (resultFilterSearch && search.touched && search.value.length) {
      setCountriesFiltered(resultFilterSearch);
    } else {
      setCountriesFiltered(state.countries);
    }
  }, [state.countries, search.value]);

  const onFilter = ({
    language,
    currency,
    region,
  }: {
    language: string;
    currency: string;
    region: string;
  }) => {
    if (language) {
      const resultLanguage = filterByLanguage(language) as Country[];
      setCountriesFiltered(resultLanguage);
    }
    if (currency) {
      const resultCurrency = filterByCurrency(currency) as Country[];
      setCountriesFiltered(resultCurrency);
    }

    if (region) {
      const resultRegions = filterByRegion(region) as Country[];
      setCountriesFiltered(resultRegions);
    }
  };

  const filterByLanguage = (language: string): Country[] | undefined => {
    const result = countriesFiltered?.filter(({ officialLanguages }: Country) =>
      officialLanguages?.some(({ name }) => name === language)
    );

    return result;
  };

  const filterByCurrency = (currency: string) => {
    const result = countriesFiltered?.filter(({ currencies }) =>
      currencies?.some(({ name }) => name === currency)
    );

    return result;
  };

  const filterByRegion = (region: string) => {
    return countriesFiltered?.filter(
      ({ subregion }) => subregion?.region.name === region
    );
  };

  const onClear = (): void => {
    reset({ language: "", currency: "", region: "" });
    setCountriesFiltered(state.countries);
  };

  const onDetail = (name: string): void => {
    dispatch({ type: CountryPediaAction.SetCountryId, payload: name });
    history.push(Pages.Detail);
  };

  return (
    <StayledHome>
      <Header />
      <h3>CountryPedia</h3>
      <div className="container">
        <input
          value={search.value}
          onBlur={() => {
            setSearch({ value: "", touched: false });
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch({ value: e.target.value, touched: true });
          }}
          placeholder="Ingrese nombre código de pais a buscar"
          type="text"
        />
        <h6>Filtrar por:</h6>
        <div className="row">
          <div className="col s12 m4">
            <select
              name="language"
              onChange={handleSubmit(onFilter)}
              ref={register}
              className="browser-default"
              defaultValue=""
            >
              <option value="" disabled>
                Idioma
              </option>
              {state.languages?.map(({ name, nativeName }: Language) => (
                <option key={name + nativeName} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col s12 m4">
            <select
              name="currency"
              onChange={handleSubmit(onFilter)}
              ref={register}
              className="browser-default"
              defaultValue=""
            >
              <option value="" disabled>
                Moneda
              </option>
              {state.currencies?.map(({ name, code }: Currency) => (
                <option key={code + name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col s12 m4">
            <select
              name="region"
              onChange={handleSubmit(onFilter)}
              ref={register}
              className="browser-default"
              defaultValue=""
            >
              <option value="" disabled>
                Región
              </option>
              {state.regions?.map(({ name }: Region) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light red"
          type="submit"
          onClick={handleSubmit(onClear)}
          name="action"
        >
          Limpiar
        </button>

        <div className="row">
          {loading && (
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          )}
          {countriesFiltered?.length === 0 && (
            <label>No se encontraron resultados.</label>
          )}

          {countriesFiltered &&
            countriesFiltered.map((country: Country) => (
              <div key={country.name} className="col s12 m4">
                <CardTemplate
                  onClickDetail={onDetail}
                  title={country.name}
                  img={country.flag.svgFile}
                >
                  <b>Region:</b> {country.subregion?.region?.name}
                  <br />
                  <b>Moneda:</b>{" "}
                  {country.currencies.map(({ name }, index: number) => (
                    <React.Fragment key={name + index}>
                      {name}
                      {index !== country.currencies.length - 1 ? "," : null}
                    </React.Fragment>
                  ))}
                  <br />
                  <b>Idioma:</b>
                  {country.officialLanguages.map(({ name }, index: number) => (
                    <React.Fragment key={name + index}>
                      {name}
                      {index !== country.officialLanguages.length - 1
                        ? ","
                        : null}
                    </React.Fragment>
                  ))}
                  <br />
                </CardTemplate>
              </div>
            ))}
        </div>
      </div>
    </StayledHome>
  );
};

export default Home;
