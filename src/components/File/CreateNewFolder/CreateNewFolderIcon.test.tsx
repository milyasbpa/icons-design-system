import React from "react";
import { render } from "@testing-library/react";

import CreateNewFolderIcon from "./CreateNewFolderIcon";

describe("CreateNewFolderIcon", () => {
  test("renders the CreateNewFolderIcon component", () => {
    render(<CreateNewFolderIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CreateNewFolderIcon component with default state", () => {
    render(<CreateNewFolderIcon />);
  });
});
