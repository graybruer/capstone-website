import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { BrowserRouter } from "react-router-dom";

test('The BookingPage Heading exists', () => {
    render(
    <BrowserRouter>
        <BookingPage />
    </BrowserRouter>
    );
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})