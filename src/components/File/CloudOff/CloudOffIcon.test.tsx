import React from "react";
import { render } from "@testing-library/react";

import CloudOffIcon from "./CloudOffIcon";

describe("CloudOffIcon", () => {
  test("renders the CloudOffIcon component", () => {
    render(<CloudOffIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudOffIcon component with default state", () => {
    render(<CloudOffIcon />);
  });
});
