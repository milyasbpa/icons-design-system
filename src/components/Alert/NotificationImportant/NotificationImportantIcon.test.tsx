import React from "react";
import { render } from "@testing-library/react";

import NotificationImportantIcon from "./NotificationImportantIcon";

describe("NotificationImportantIcon", () => {
  test("renders the NotificationImportantIcon component", () => {
    render(
      <NotificationImportantIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the NotificationImportantIcon component with default state", () => {
    render(<NotificationImportantIcon />);
  });
});
