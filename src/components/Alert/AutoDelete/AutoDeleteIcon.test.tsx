import React from "react";
import { render } from "@testing-library/react";

import AutoDeleteIcon from "./AutoDeleteIcon";

describe("AutoDeleteIcon", () => {
  test("renders the AutoDeleteIcon component", () => {
    render(<AutoDeleteIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the AutoDeleteIcon component with default state", () => {
    render(<AutoDeleteIcon />);
  });
});
