/*import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Reservation from './Reservation';
import { useState } from 'react';
test('booking tables', async () => {
    render(<Reservation activeItem="table" availableTimes={["19:00"]} />);
    expect(screen.getByText(/Reserving a table/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close reservation form/i })).toBeInTheDocument();

    const insertion = screen.getByPlaceholderText(/your first name/i);
    await userEvent.type(insertion, 'Ahmad');
    expect(insertion).toHaveValue('Ahmad');


    const submitForm = screen.getByText(/Reserving a table/i);
    fireEvent.submit(submitForm);
    expect(screen.queryByText(/Ahmad/i)).not.toBeInTheDocument();

});
*/

// Reservation.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Reservation from "./Reservation";

const mockDispatch = jest.fn();
const mockOnClose = jest.fn();

const availableTimes = {
    "2026-10-10": ["17:00", "18:00", "19:00"]
};

describe("Reservation Page", () => {
    beforeEach(() => {
        mockDispatch.mockClear();
        mockOnClose.mockClear();
        localStorage.clear();
    });

    test("rendering input fields", () => {
        render(<Reservation availableTimes={availableTimes} dispatch={mockDispatch} onClose={mockOnClose} openModal={true} />);
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/persons/i)).toBeInTheDocument();
    });

    test("when empty fields exist", () => {
        render(<Reservation availableTimes={availableTimes} dispatch={mockDispatch} onClose={mockOnClose} openModal={true} />);
        const submitButton = screen.getByRole("button", { name: /submit/i });
        fireEvent.click(submitButton);
        expect(mockDispatch).not.toHaveBeenCalled();
    });

    test("when all stuff is ok", () => {
        render(<Reservation availableTimes={availableTimes} dispatch={mockDispatch} onClose={mockOnClose} openModal={true} />);

        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Mazen" } });
        fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2026-10-10" } });
        fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
        fireEvent.change(screen.getByLabelText(/persons/i), { target: { value: "2" } });

        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        expect(mockDispatch).toHaveBeenCalledWith({ type: "BOOKING", payload: { bookDate: "2026-10-10", bookTime: "18:00" } });
        expect(screen.getByText("Mazen")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("18:00")).toBeInTheDocument();
    });

    test("deleting a reservation", () => {
        render(<Reservation availableTimes={availableTimes} dispatch={mockDispatch} onClose={mockOnClose} openModal={true} />);

        // Booking
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Mazen" } });
        fireEvent.change(screen.getByLabelText(/Date /i), { target: { value: "2026-10-10" } });
        fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "17:00" } });
        fireEvent.change(screen.getByLabelText(/persons/i), { target: { value: "3" } });
        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        // Deleting

        fireEvent.click(screen.getByText(/decline/i));
        expect(mockDispatch).toHaveBeenCalledWith({ type: "DELETING", payload: { delDate: "2026-10-10", delTime: "17:00" } });
        expect(screen.queryByText("Mazen")).not.toBeInTheDocument();
    });
});