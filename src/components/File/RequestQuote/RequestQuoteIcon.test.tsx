import React from "react";
import { render } from "@testing-library/react";

import RequestQuoteIcon from "./RequestQuoteIcon";

describe("RequestQuoteIcon", () => {
  test("renders the RequestQuoteIcon component", () => {
    render(<RequestQuoteIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the RequestQuoteIcon component with default state", () => {
    render(<RequestQuoteIcon />);
  });
});
