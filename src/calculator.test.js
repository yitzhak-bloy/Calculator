import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Calculator from "./calculator";

afterEach(cleanup);

it("1 butten should equal to 1", () => {
  render(<Calculator />);
  const oneAnchorNode = screen.getByText(/1/i);
  expect(oneAnchorNode).toHaveTextContent(1);
});
