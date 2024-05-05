import { fireEvent, render, screen } from '@testing-library/react';
import App from './App'
const createProj=()=>{
  const button = screen.getByRole("button", { name: "Create project" });
  fireEvent.click(button)
}
const cancelPro=()=>{
const button = screen.getByRole("button", { name: "Cancel" });
fireEvent.click(button)
}
const savePro=()=>{
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
  }
describe('Check basic App test cases',()=>{
  test('no project undefined', () => {
    render(<App />);
    const text=screen.getByText('No project yet created');
    expect(text).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "Create project" });
    expect(button).toBeInTheDocument();
  });
 test('createProject add',()=>{
  render(<App/>)
  createProj();
 })
 test('cancel project',()=>{
  render(<App/>)
  createProj();
  cancelPro();
 })
 test('save project',()=>{
  render(<App/>)
  createProj();
  savePro();
 })
 test('selected project',()=>{
  render(<App />)
  createProj()
  savePro();
  const list = screen.getAllByRole("listitem");
  fireEvent.click(list[0])
  expect(list[0]).toBeInTheDocument();
 })
 test('add task project',()=>{
  render(<App />)
  createProj()
  savePro();
  const list = screen.getAllByRole("listitem");
  fireEvent.click(list[0])
  expect(list[0]).toBeInTheDocument();
  const button=screen.getByRole('button',{name: "Add"});
  fireEvent.click(button)
  const clear=screen.getByRole('button',{name:"Clear"});
  fireEvent.click(clear)
 })
 test('delete project',()=>{
  render(<App />)
  createProj()
  savePro();
  const list = screen.getAllByRole("listitem");
  fireEvent.click(list[0])
  expect(list[0]).toBeInTheDocument();
  const button = screen.getByRole("button", { name: "Delete" });
  fireEvent.click(button)
 })
})


