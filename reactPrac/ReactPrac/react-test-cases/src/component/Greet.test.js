import {render, screen} from '@testing-library/react';
import Greet from './Greet'
describe('Greet component',()=>{
test('greet test',()=>{
render(<Greet name="Vishwas"/>);
const text=screen.getByText(/vishwas/i)
expect(text).toBeInTheDocument();
})
})