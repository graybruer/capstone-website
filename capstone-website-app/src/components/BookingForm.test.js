import { render } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from './pages/BookingPage';

// test('should display the "choose date" lable', () => {
//     render(
//         <BookingForm
//           availableTimes={{times: [],}}
//           dispatch={expect.anything()}
//         />
//     );
//     const labelElement = screen.getByText('Choose a Date');
//     expect(labelElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns the correct expected value', () => {
    const today = new Date();
    const initialState = initializeTimes();
    const expectedResult = { times: fetchAPI(today) };
    expect(initialState).toEqual(expectedResult);
  });

  test('updateTimes returns the same state', () => {
    const state = {
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
    };
    const action = { type: 'SOME_ACTION' };
    const newState = updateTimes(state, action);
    expect(newState).toEqual(state);
  });