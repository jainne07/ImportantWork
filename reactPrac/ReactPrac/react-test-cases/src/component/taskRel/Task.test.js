import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Task from "./Task";
describe("Task component", () => {
  test("if task is length check", () => {
    const projects = {
        id: 0.121,
        title: "test",
        description: "test",
        date: "2024-01-22",
    };
    const task = [{ id: 0.111, projectId: 0.121, name: "add node"} ];
    const deleteTask=jest.fn()
    render(<Task project={projects} task={task} deleteTask={deleteTask}/>);
    const button=screen.getByRole('button',{name:"Clear"});
    fireEvent.click(button)
    expect(deleteTask).toBeCalled();
    expect(button).toBeInTheDocument();
  });
  test("if task is not length check", () => {
    const projects = {
        id: 0.121,
        title: "test",
        description: "test",
        date: "2024-01-22",
    };
    const task = [];
    render(<Task project={projects} task={task}/>);
    const text=screen.getByText('Create task');
    expect(text).toBeInTheDocument();
  });
});
