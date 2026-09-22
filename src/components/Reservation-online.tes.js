import { render, screen } from '@testing-library/react';
import Reservation from './Reservation'; 
test('order online', () => {
    render(<Reservation activeItem="menu"  />);

    const headingElement = screen.getByText(/online menu/i);

    expect(headingElement).toBeInTheDocument();
});

