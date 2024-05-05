import { render, screen } from "@testing-library/react";
import React from 'react'
import SelectedProj from "./SelectedProj";
describe("SelectedProject component", () => {
    test("Button check", () => {
     const projects = {
        id: 0.121,
        title: "test",
        description: "test",
        date: "2024-01-22",
    };
    const task = [{ id: 0.111, projectId: 0.121, name: "add node"} ];
        render(<SelectedProj project={projects} task={task}/>);
        const button = screen.getByRole("button", { name: "Cancel" });
        expect(button).toBeInTheDocument();
      });
});
