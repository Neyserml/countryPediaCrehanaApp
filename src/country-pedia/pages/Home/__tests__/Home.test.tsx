import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ApolloConnectedProvider from "../../../../config";
import { CountryPediaProvider } from "../../../context";
import { COUNTRIES_STUB } from "../../../mock/countries.mock";
import { CURRENCIES_STUB } from "../../../mock/currencies.mock";
import { LANGUAGES_STUB } from "../../../mock/languages.mock";
import { REGIONS_STUB } from "../../../mock/regions.mock";
import { CountryPediaState, initialState } from "../../../store/reducer";
import Home from "../Home";

const state: CountryPediaState = {
  ...initialState,
  countries: COUNTRIES_STUB,
  languages: LANGUAGES_STUB,
  currencies: CURRENCIES_STUB,
  regions: REGIONS_STUB,
};

const renderComponent = (extraState = state) => {
  return render(
    <ApolloConnectedProvider>
      <CountryPediaProvider extraState={extraState}>
        <Home />
      </CountryPediaProvider>
    </ApolloConnectedProvider>
  );
};

describe("Home Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  it("should match snapshot in home page", async () => {
    await act(async () => {
      const component = renderComponent();
      expect(component.container).toMatchSnapshot();
    });
  });

  it("should filter according to name entered", async () => {
    await act(async () => {
      renderComponent();
    });
    const name = screen.queryByPlaceholderText(
      "Ingrese nombre código de pais a buscar"
    ) as HTMLInputElement;

    fireEvent.change(name, { target: { value: "Afghanistan" } });

    const message = screen.queryByText("No se encontraron resultados.");
    expect(message).toBeNull();
  });
});
