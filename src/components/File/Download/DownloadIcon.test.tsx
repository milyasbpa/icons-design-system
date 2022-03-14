import React from "react";
import { render } from "@testing-library/react";

import DownloadIcon from "./DownloadIcon";

describe("DownloadIcon", () => {
  test("renders the DownloadIcon component", () => {
    render(<DownloadIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the DownloadIcon component with default state", () => {
    render(<DownloadIcon />);
  });
});
