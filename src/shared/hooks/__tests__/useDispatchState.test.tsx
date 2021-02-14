import { render } from "@testing-library/react";
import React, { useReducer } from "react";
import useDispatchState, { DispatchState } from "../useDispatchState";

interface MyDemoState {
  title: string;
}

type DemoContextType = DispatchState<Partial<MyDemoState>>;

const DemoContext = React.createContext({} as DemoContextType);

const DemoContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(() => ({}), {
    title: "crehana",
  });
  return (
    <DemoContext.Provider value={{ dispatch, state }}>
      {children}
    </DemoContext.Provider>
  );
};

describe("useDispatchState", () => {
  it("should provide dispatch and state values", () => {
    const DemoComponent: React.FC = () => {
      const [state, dispatch] = useDispatchState(DemoContext);

      expect(state.title).toBe("crehana");
      expect(dispatch).toBeInstanceOf(Function);

      return <strong>{state.title}</strong>;
    };

    const component = render(
      <DemoContextProvider>
        <DemoComponent />
      </DemoContextProvider>
    );

    expect(component.container).toMatchSnapshot();
  });
});
