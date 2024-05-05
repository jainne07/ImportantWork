import { fireEvent, render, screen } from "@testing-library/react";
import NewTask from "./NewTask";
describe("NewTask component", () => {
  test("Input check", () => {
    render(<NewTask/>)
    const input=screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  test("Button check", () => {
    render(<NewTask/>)
    const button=screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  test("Button handleTask check", () => {
    const handleTask=jest.fn()
    render(<NewTask addTask={handleTask}/>)
    const button=screen.getByRole('button');
    fireEvent.click(button)
    expect(handleTask).toBeCalled()
    expect(button).toBeInTheDocument();
  });
});
