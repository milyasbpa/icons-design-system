import React from "react";
import { render } from "@testing-library/react";

import SensorDoorIcon from "./SensorDoorIcon";

describe("SensorDoorIcon", () => {
  test("renders the SensorDoorIcon component", () => {
    render(<SensorDoorIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the SensorDoorIcon component with default state", () => {
    render(<SensorDoorIcon />);
  });
});
