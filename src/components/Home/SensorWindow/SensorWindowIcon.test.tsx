import React from "react";
import { render } from "@testing-library/react";

import SensorWindowIcon from "./SensorWindowIcon";

describe("SensorWindowIcon", () => {
  test("renders the SensorWindowIcon component", () => {
    render(<SensorWindowIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the SensorWindowIcon component with default state", () => {
    render(<SensorWindowIcon />);
  });
});
