import React from "react";
import { render } from "@testing-library/react";

import AttachEmailIcon from "./AttachEmailIcon";

describe("AttachEmailIcon", () => {
  test("renders the AttachEmailIcon component", () => {
    render(<AttachEmailIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the AttachEmailIcon component with default state", () => {
    render(<AttachEmailIcon />);
  });
});
