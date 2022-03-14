import React from "react";
import { render } from "@testing-library/react";

import CloudDownloadIcon from "./CloudDownloadIcon";

describe("CloudDownloadIcon", () => {
  test("renders the CloudDownloadIcon component", () => {
    render(<CloudDownloadIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudDownloadIcon component with default state", () => {
    render(<CloudDownloadIcon />);
  });
});
