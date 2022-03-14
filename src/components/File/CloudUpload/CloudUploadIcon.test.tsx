import React from "react";
import { render } from "@testing-library/react";

import CloudUploadIcon from "./CloudUploadIcon";

describe("CloudUploadIcon", () => {
  test("renders the CloudUploadIcon component", () => {
    render(<CloudUploadIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudUploadIcon component with default state", () => {
    render(<CloudUploadIcon />);
  });
});
