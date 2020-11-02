import React from "react";
import { render } from "@testing-library/react";
import { Component } from "Components";

describe("test", () => {
  test("test", () => {
    const { container } = render(<Component />);

    expect(container).toMatchSnapshot();
  });
});
