import React from "react";
import { render } from "@testing-library/react";

import FolderIcon from "./FolderIcon";

describe("FolderIcon", () => {
  test("renders the FolderIcon component", () => {
    render(<FolderIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the FolderIcon component with default state", () => {
    render(<FolderIcon />);
  });
});
