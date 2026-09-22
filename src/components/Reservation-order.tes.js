import { render, screen } from '@testing-library/react';
import Reservation from './Reservation'; 
test('order online', () => {
    render(<Reservation activeItem="order"  />);

    const headingElement = screen.getByText(/order a delivery/i);

    expect(headingElement).toBeInTheDocument();
});

