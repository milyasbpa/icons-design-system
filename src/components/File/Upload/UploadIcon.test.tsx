import React from "react";
import { render } from "@testing-library/react";

import UploadIcon from "./UploadIcon";

describe("UploadIcon", () => {
  test("rendeUploadIconrs the UploadIcon component", () => {
    render(<UploadIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the UploadIcon component with default state", () => {
    render(<UploadIcon />);
  });
});
