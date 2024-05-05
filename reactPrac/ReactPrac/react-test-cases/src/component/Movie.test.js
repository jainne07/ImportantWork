import { fireEvent, render, screen } from "@testing-library/react";
import Movie from "./Movie";
import {server } from '../mocks/server';
import {rest} from 'msw'
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
describe("Movie component", () => {
  test('loads and displays greeting', async () => {
    render(<Movie/>)
    const button=screen.getByRole('button', {name:"Fetch Movie"});
     await fireEvent.click(button)
     const movie=await screen.findAllByRole("listitem")
     const heading= await screen.findAllByRole('heading',{level: 3})
     expect(movie).toHaveLength(3);
     expect(heading[2].textContent).toBe("Hope")
  })
  test('error and displays greeting', async () => {
    render(<Movie/>)
    server.use(rest.get('https://react-prac-5b5b4-default-rtdb.firebaseio.com/movie.json', (req, res, ctx) => {
      return res(
        ctx.status(400)
      )
  }))
    const button=screen.getByRole('button', {name:"Fetch Movie"});
    await fireEvent.click(button)
    const error=await screen.findByText("something went wrong")
    expect(error).toBeInTheDocument()
  })


});
