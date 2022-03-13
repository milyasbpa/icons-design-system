import React from "react";
import { render } from "@testing-library/react";

import ErrorIcon from "./ErrorIcon";

describe("ErrorIcon", () => {
  test("renders the ErrorIcon component", () => {
    render(<ErrorIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the ErrorIcon component with default state", () => {
    render(<ErrorIcon />);
  });
});
