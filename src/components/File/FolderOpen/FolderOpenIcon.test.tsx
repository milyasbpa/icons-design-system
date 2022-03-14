import React from "react";
import { render } from "@testing-library/react";

import FolderOpenIcon from "./FolderOpenIcon";

describe("FolderOpenIcon", () => {
  test("renders the FolderOpenIcon component", () => {
    render(<FolderOpenIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the FolderOpenIcon component with default state", () => {
    render(<FolderOpenIcon />);
  });
});
