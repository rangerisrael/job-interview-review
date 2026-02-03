import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Counter from "../page";

describe("Counter", function () {
  it("count display", function () {
    render(<Counter />);

    expect(screen.getByText("Counter")).toBeDefined();
  });

  it("Increment", async function () {
    render(<Counter />);

    await userEvent.click(screen.getByText("Increment"));

    expect(screen.getByTestId("count")).toHaveTextContent("Count: 2");
  });

  it("Decrement", async function () {
    render(<Counter />);

    await userEvent.click(screen.getByText("Decrement"));

    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });
});
