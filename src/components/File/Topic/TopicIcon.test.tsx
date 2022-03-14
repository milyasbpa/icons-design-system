import React from "react";
import { render } from "@testing-library/react";

import TopicIcon from "./TopicIcon";

describe("TopicIcon", () => {
  test("renders the TopicIcon component", () => {
    render(<TopicIcon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the TopicIcon component with default state", () => {
    render(<TopicIcon />);
  });
});
