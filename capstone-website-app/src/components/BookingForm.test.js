import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from '../pages/BookingPage';
import { fetchAPI } from "../utils/FakeAPI";

test('should display the "Date:" lable', () => {
    render(
        <BrowserRouter>
            <BookingForm
              availableTimes={{times: [],}}
              dispatch={expect.anything()}
            />
        </BrowserRouter>
    );
    const labelElement = screen.getByText('Date:');
    expect(labelElement).toBeInTheDocument();
});

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