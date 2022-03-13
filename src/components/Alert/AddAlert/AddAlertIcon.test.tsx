import React from "react";
import { render } from "@testing-library/react";

import AddAlertIcon from "./AddAlertIcon";

describe("AddAlertIcon", () => {
  test("renders the AddAlertIcon component", () => {
    render(<AddAlertIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the AddAlertIcon component with default state", () => {
    render(<AddAlertIcon />);
  });
});
