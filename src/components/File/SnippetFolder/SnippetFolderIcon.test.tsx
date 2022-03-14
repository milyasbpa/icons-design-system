import React from "react";
import { render } from "@testing-library/react";

import SnippetFolderIcon from "./SnippetFolderIcon";

describe("SnippetFolderIcon", () => {
  test("renders the SnippetFolderIcon component", () => {
    render(<SnippetFolderIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the SnippetFolderIcon component with default state", () => {
    render(<SnippetFolderIcon />);
  });
});
