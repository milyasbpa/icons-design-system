import React from "react";
import { render } from "@testing-library/react";

import AttachmentIcon from "./AttachmentIcon";

describe("AttachmentIcon", () => {
  test("renders the AttachmentIcon component", () => {
    render(<AttachmentIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the AttachmentIcon component with default state", () => {
    render(<AttachmentIcon />);
  });
});
