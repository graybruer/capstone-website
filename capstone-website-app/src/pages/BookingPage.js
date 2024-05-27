import { useReducer } from 'react';
import BookingForm from "../components/BookingForm";
import {fetchAPI} from "../utils/FakeAPI";


export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    }
  };

export const initializeTimes = () => {
    // create a Date object to represent today's date
    const today = new Date();
    return { times: fetchAPI(today) };
  };


const BookingPage = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <div className="bookingPage">
            <div id="bookingPageHeader">
                <h1>Reserve a Table</h1>
            </div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    );
};

export default BookingPage;