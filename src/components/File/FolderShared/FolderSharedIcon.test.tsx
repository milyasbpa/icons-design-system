import React from "react";
import { render } from "@testing-library/react";

import FolderSharedIcon from "./FolderSharedIcon";

describe("FolderSharedIcon", () => {
  test("renders the FolderSharedIcon component", () => {
    render(<FolderSharedIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the FolderSharedIcon component with default state", () => {
    render(<FolderSharedIcon />);
  });
});
