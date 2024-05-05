import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react'
import Sidebar from "./Sidebar";
describe("Sidebar component", () => {
    test("Button check", () => {
      const projects=[{
        id:0.121,
        title:"test",
        description:"test",
        date:"2024-01-22"
      }]
        render(<Sidebar projects={projects}/>);
        const button = screen.getByRole("button", { name: "Add project" });
        expect(button).toBeInTheDocument();
      });
      test("listbox projectid check", () => {
        const projects=[{
          id:0.121,
          title:"test",
          description:"test",
          date:"2024-01-22"
        }]
        const onSelect=jest.fn()
          render(<Sidebar projects={projects} onSelect={onSelect}/>);
          const list = screen.getAllByRole("listitem");
          fireEvent.click(list[0])
          expect(onSelect).toBeCalled();
          expect(list[0]).toBeInTheDocument();
        });
});
