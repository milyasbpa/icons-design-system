import React from "react";
import { render } from "@testing-library/react";

import WarningIcon from "./WarningIcon";

describe("WarningIcon", () => {
  test("renders the WarningIcon component", () => {
    render(<WarningIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the WarningIcon component with default state", () => {
    render(<WarningIcon />);
  });
});
