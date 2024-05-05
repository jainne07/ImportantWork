import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import CounterContextProvider from "./CounterContext";

describe("CounterContext component", () => {
  test("heading check", () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
  test("increment check", () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );
    const button = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(button);
  });
  test("decrement check", () => {
    render(
      <CounterContextProvider>
        <Counter />
      </CounterContextProvider>
    );
    const button = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(button);
  });
});
