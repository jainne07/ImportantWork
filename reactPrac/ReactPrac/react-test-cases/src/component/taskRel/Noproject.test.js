import { render, screen } from "@testing-library/react";
import React from 'react'
import NoProject from "./NoProject";
describe("No project component", () => {
test('project text',()=>{
    render(<NoProject/>)
    const text=screen.getByText('No project yet created');
    expect(text).toBeInTheDocument();
})
});
