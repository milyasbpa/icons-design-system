import React from "react";
import { render } from "@testing-library/react";

import TextSnippetIcon from "./TextSnippetIcon";

describe("TextSnippetIcon", () => {
  test("renders the TextSnippetIcon component", () => {
    render(<TextSnippetIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the TextSnippetIcon component with default state", () => {
    render(<TextSnippetIcon />);
  });
});
