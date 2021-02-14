import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import CardTemplate from "../CardTemplete";

const renderComponent = (img: string, title: string, children: ReactNode) => {
  return render(
    <CardTemplate img={img} title={title} onClickDetail={jest.fn()}>
      {children}
    </CardTemplate>
  );
};

describe("Card Template Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should match snapshot in card template component", () => {
    const children = <h3>prueba</h3>;
    const component = renderComponent("img.jpg", "Peru", children);
    expect(component.container).toMatchSnapshot();
  });
});
