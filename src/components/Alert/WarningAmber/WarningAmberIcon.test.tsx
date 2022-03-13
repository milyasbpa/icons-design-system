import React from "react";
import { render } from "@testing-library/react";

import WarningAmberIcon from "./WarningAmberIcon";

describe("WarningAmberIcon", () => {
  test("renders the WarningAmberIcon component", () => {
    render(<WarningAmberIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the WarningAmberIcon component with default state", () => {
    render(<WarningAmberIcon />);
  });
});
