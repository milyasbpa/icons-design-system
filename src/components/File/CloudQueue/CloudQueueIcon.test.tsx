import React from "react";
import { render } from "@testing-library/react";

import CloudQueueIcon from "./CloudQueueIcon";

describe("CloudQueueIcon", () => {
  test("renders the CloudQueueIcon component", () => {
    render(<CloudQueueIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the CloudQueueIcon component with default state", () => {
    render(<CloudQueueIcon />);
  });
});
