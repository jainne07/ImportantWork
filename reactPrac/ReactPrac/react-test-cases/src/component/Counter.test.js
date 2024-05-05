import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
describe("Counter component", () => {
  test("increment check", () => {
    render(<Counter/>)
    const button=screen.getByRole('button',{name: 'Increment'})
    fireEvent.click(button)
  });
  test("decrement check", () => {
    render(<Counter/>)
    const button=screen.getByRole('button',{name: 'Decrement'})
    fireEvent.click(button)
  });
});