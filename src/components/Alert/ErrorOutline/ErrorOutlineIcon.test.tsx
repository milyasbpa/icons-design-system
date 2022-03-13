import React from "react";
import { render } from "@testing-library/react";

import ErrorOutlineIcon from "./ErrorOutlineIcon";

describe("ErrorOutlineIcon", () => {
  test("renders the ErrorOutlineIcon component", () => {
    render(<ErrorOutlineIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the ErrorOutlineIcon component with default state", () => {
    render(<ErrorOutlineIcon />);
  });
});
