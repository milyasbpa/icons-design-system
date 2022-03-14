import React from "react";
import { render } from "@testing-library/react";

import RuleFolderIcon from "./RuleFolderIcon";

describe("RuleFolderIcon", () => {
  test("renders the RuleFolderIcon component", () => {
    render(<RuleFolderIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the RuleFolderIcon component with default state", () => {
    render(<RuleFolderIcon />);
  });
});
