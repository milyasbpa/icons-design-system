import React from "react";
import { render } from "@testing-library/react";

import CloudCircleIcon from "./CloudCircleIcon";

describe("CloudCircleIcon", () => {
  test("renders the CloudCircleIcon component", () => {
    render(<CloudCircleIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudCircleIcon component with default state", () => {
    render(<CloudCircleIcon />);
  });
});
