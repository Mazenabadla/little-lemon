import { render, screen, fireEvent } from '@testing-library/react';
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

