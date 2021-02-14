import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "../Header";

const renderComponent = () => {
  return render(<Header />);
};

describe("Header component", () => {
  it("should match snapshot in header page", () => {
    const component = renderComponent();
    expect(component.container).toMatchSnapshot();
  });

  it("should show title", () => {
    renderComponent();
    const title = screen.queryByText("Crehana");
    expect(title).not.toBeNull();
  });
});
