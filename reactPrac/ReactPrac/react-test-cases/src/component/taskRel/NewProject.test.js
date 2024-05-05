import { fireEvent, render, screen } from "@testing-library/react";
import NewProject from "./NewProject";
describe("NewProject component", () => {
  test("Input title check", () => {
    render(<NewProject />);
    const input = screen.getByRole("textbox", { name: "Title" });
    expect(input).toBeInTheDocument();
  });
  test("Input description check", () => {
    render(<NewProject />);
    const input = screen.getByRole("textbox", { name: "Description" });
    expect(input).toBeInTheDocument();
  });
  test("Input date check", () => {
    render(<NewProject />);
    const input = screen.getByLabelText("Date");
    expect(input).toBeInTheDocument();
  });
  test("Button check", () => {
    render(<NewProject />);
    const button = screen.getByRole("button", { name: "Cancel" });
    expect(button).toBeInTheDocument();
  });
  test("Button save check", () => {
    render(<NewProject />);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toBeInTheDocument();
  });

  test("Button cancel event", () => {
    const onCancel = jest.fn();
    render(<NewProject onCancel={onCancel} />);
    const button = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(button);
    expect(onCancel).toBeCalled();
    expect(button).toBeInTheDocument();
  });
  test("Button save event but not add anything", () => {
    const handleAdd = jest.fn();
    render(<NewProject onAdd={handleAdd} />);
    const title = screen.getByRole("textbox", { name: "Title" });
    const des = screen.getByRole("textbox", { name: "Description" });
    const input = screen.getByLabelText("Date");
    const mock = { title: "", description: "", date: "" };
    title.value = mock.title;
    des.value = mock.description;
    input.value = mock.date
    const button = screen.getByRole("button", { name: "Save" });
    fireEvent.click(button);
    expect(handleAdd).not.toBeCalled();
    expect(button).toBeInTheDocument();
  });
  test("Button save event", () => {
    const handleAdd = jest.fn();
    render(<NewProject onAdd={handleAdd} />);
    const title = screen.getByRole("textbox", { name: "Title" });
    const des = screen.getByRole("textbox", { name: "Description" });
    const input = screen.getByLabelText("Date");
    fireEvent.change(input, { target: { value: "2024-05-12" } });
    const mock = { title: "test", description: "test", date: input.value };
    title.value = mock.title;
    des.value = mock.description;
    input.value=mock.date
    const button = screen.getByRole("button", { name: "Save" });
    fireEvent.click(button);
    expect(handleAdd).toBeCalled();
    expect(button).toBeInTheDocument();
  });
});
