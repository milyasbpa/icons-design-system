import React from "react";
import { render } from "@testing-library/react";

import CloudDoneIcon from "./CloudDoneIcon";

describe("CloudDoneIcon", () => {
  test("renders the CloudDoneIcon component", () => {
    render(<CloudDoneIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudDoneIcon component with default state", () => {
    render(<CloudDoneIcon />);
  });
});
