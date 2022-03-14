import React from "react";
import { render } from "@testing-library/react";

import DownloadDoneIcon from "./DownloadDoneIcon";

describe("DownloadDoneIcon", () => {
  test("renders the DownloadDoneIcon component", () => {
    render(<DownloadDoneIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the DownloadDoneIcon component with default state", () => {
    render(<DownloadDoneIcon />);
  });
});
