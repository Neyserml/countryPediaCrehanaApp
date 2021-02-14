import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { CountryPediaProvider } from "../../../../context";
import { COUNTRIES_STUB } from "../../../../mock/countries.mock";
import { CountryPediaState, initialState } from "../../../../store/reducer";
import Detail from "../Detail";

const mockHistoryGoBack = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockHistoryGoBack,
  }),
}));

const state: CountryPediaState = {
  ...initialState,
  countries: COUNTRIES_STUB,
  countryId: "Albania",
};

const renderComponent = (extraState = state) => {
  return render(
    <CountryPediaProvider extraState={extraState}>
      <Detail />
    </CountryPediaProvider>
  );
};

describe("Detail Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot in detail page", () => {
    const component = renderComponent();
    expect(component.container).toMatchSnapshot();
  });

  it("should go back", () => {
    renderComponent();
    const link = screen.getByText("Volver");
    fireEvent.click(link);
    expect(mockHistoryGoBack).toHaveBeenCalled();
  });
});
