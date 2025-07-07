import { fireEvent, render, screen } from "@testing-library/react";
import App from '../App';

test('renders Vite + React text', () => {
    render(<App />);
    // const headerElement = screen.getByText(/Vite \+ React/i);
    // expect(headerElement).toBeInTheDocument();
});

// test('increments count on button click', () => {
//     render(<App />);
//     const buttonElement = screen.getByAltText(/count is 0/i);
//     expect(buttonElement).toBeInTheDocument();

//     fireEvent.click(buttonElement);
//     expert(buttonElement).toHaveTextContent('count is 1');

//     fireEvent.click(buttonElement);
//     expert(buttonElement).toHaveTextContent('count is 2');

// })