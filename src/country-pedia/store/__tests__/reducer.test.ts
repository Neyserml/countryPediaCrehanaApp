import { CountryPediaAction } from "../actions";
import {
  initialState,
  countryPediaContextReducer as reducer,
} from "../reducer";

describe("CountryPedia context Reducer", () => {
  it("should clear state", () => {
    const state = {
      ...initialState,
      otherValue: 1,
    };

    const clearedState = reducer(state, {
      type: CountryPediaAction.ClearState,
    });

    expect(clearedState).toMatchSnapshot();
  });

  it("should throw error if dispatch invalid action type", () => {
    const type = "fakeActionType" as CountryPediaAction;
    try {
      reducer(initialState, {
        type,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toMatchSnapshot();
    }
  });

  it("should set countryId", () => {
    const state = {
      ...initialState,
    };

    const stateUpdated = reducer(state, {
      type: CountryPediaAction.SetCountryId,
      payload: "Peru",
    });

    expect(stateUpdated).toMatchSnapshot();
  });

  // so for all actions
});
