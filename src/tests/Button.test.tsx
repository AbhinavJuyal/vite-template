import "./__mocks__/matchMedia";
import React from "react";

import { Button } from "@convoy-ui";
import { renderWithStyledTheme } from "./testUtils";
import { FaCog } from "react-icons/fa";

describe("Button", () => {
  it("should renders <Button>", () => {
    const { getByText } = renderWithStyledTheme(<Button>Hello world</Button>);
    expect(getByText("Hello world")).toBeInTheDocument();
  });

  it("should renders <Button> with icon", () => {
    const { getByText, getByTestId } = renderWithStyledTheme(
      <Button icon={FaCog}>Hello world</Button>
    );
    expect(getByText("Hello world")).toBeInTheDocument();
    expect(getByTestId("icon")).toHaveAttribute(
      "class",
      expect.stringContaining("button__icon")
    );
  });

  it("should renders <Button> with loading spinner", () => {
    const { getByTestId } = renderWithStyledTheme(
      <Button icon={FaCog} isLoading>
        Hello world
      </Button>
    );
    expect(getByTestId("icon")).toHaveAttribute(
      "class",
      expect.stringContaining("spin")
    );
  });
});
