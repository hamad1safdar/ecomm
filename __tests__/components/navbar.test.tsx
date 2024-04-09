import { render } from "@testing-library/react";

import Navbar from "../../src/components/Navbar";

import { RouterWrapper } from "../test-utils/wrappers";

describe("Navbar", () => {
  test("It renders successfully", () => {
    const { getByText } = render(
      <RouterWrapper>
        <Navbar />
      </RouterWrapper>
    );

    expect(getByText("Home")).toBeInTheDocument();
  });
});
