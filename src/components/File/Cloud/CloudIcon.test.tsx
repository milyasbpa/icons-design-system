import React from "react";
import { render } from "@testing-library/react";

import CloudIcon from "./CloudIcon";

describe("CloudIcon", () => {
  test("renders the CloudIcon component", () => {
    render(<CloudIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudIcon component with default state", () => {
    render(<CloudIcon />);
  });
});
